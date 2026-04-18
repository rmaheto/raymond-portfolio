import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import {
  PortfolioData,
  PortfolioProfile,
  SkillEntry,
  ExperienceEntry,
  ProjectEntry,
  CertificationEntry,
  EducationEntry,
} from '../../models/portfolio.model';

type Tab = 'profile' | 'skills' | 'experience' | 'projects' | 'certifications' | 'education' | 'resume';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  activeTab: Tab = 'profile';
  data: PortfolioData | null = null;
  saving = false;
  message = '';
  resumeFile: File | null = null;
  uploadingResume = false;
  avatarFile: File | null = null;
  avatarPreview: string | null = null;
  uploadingAvatar = false;
  avatarSizeError = false;

  // Editing state
  profileDraft: PortfolioProfile | null = null;
  editingSkill: SkillEntry | null = null;
  editingExp: ExperienceEntry | null = null;
  editingProject: ProjectEntry | null = null;
  editingCert: CertificationEntry | null = null;
  editingEdu: EducationEntry | null = null;

  readonly skillCategories = ['frontend', 'backend', 'db', 'devops'];
  readonly tabs: { key: Tab; label: string }[] = [
    { key: 'profile', label: 'Profile' },
    { key: 'skills', label: 'Skills' },
    { key: 'experience', label: 'Experience' },
    { key: 'projects', label: 'Projects' },
    { key: 'certifications', label: 'Certifications' },
    { key: 'education', label: 'Education' },
    { key: 'resume', label: 'Resume' },
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
    private portfolioApi: PortfolioApiService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.portfolioApi.portfolio$.subscribe((d) => {
      if (d) {
        this.data = d;
        this.profileDraft = { ...d.profile };
      }
    });
  }

  setTab(tab: Tab) {
    this.activeTab = tab;
    this.message = '';
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/admin/login']);
  }

  // ── Profile ───────────────────────────────────────────────────────────────

  saveProfile() {
    if (!this.profileDraft) return;
    this.saving = true;
    this.portfolioApi.updateProfile(this.profileDraft).subscribe({
      next: () => { this.message = 'Profile saved.'; this.saving = false; },
      error: () => { this.message = 'Save failed.'; this.saving = false; },
    });
  }

  // ── Skills ────────────────────────────────────────────────────────────────

  get skillsByCategory(): Record<string, SkillEntry[]> {
    if (!this.data) return {};
    const map: Record<string, SkillEntry[]> = {};
    this.skillCategories.forEach((cat) => {
      map[cat] = (this.data!.skills[cat] || []).map((name, i) => ({
        name,
        category: cat,
        displayOrder: i,
      }));
    });
    return map;
  }

  editSkill(skill: SkillEntry) { this.editingSkill = { ...skill }; }
  cancelSkillEdit() { this.editingSkill = null; }
  newSkill(category: string) {
    this.editingSkill = { name: '', category, displayOrder: 999 };
  }

  saveSkill() {
    if (!this.editingSkill) return;
    const url = this.editingSkill.id
      ? `/api/v1/admin/skills/${this.editingSkill.id}`
      : '/api/v1/admin/skills';
    const req = this.editingSkill.id
      ? this.http.put(url, this.editingSkill)
      : this.http.post(url, this.editingSkill);
    req.subscribe({ next: () => { this.editingSkill = null; this.portfolioApi.reload(); this.message = 'Skill saved.'; } });
  }

  deleteSkill(skill: SkillEntry) {
    if (!skill.id || !confirm('Delete this skill?')) return;
    this.http.delete(`/api/v1/admin/skills/${skill.id}`).subscribe(() => this.portfolioApi.reload());
  }

  // ── Experience ────────────────────────────────────────────────────────────

  editExp(exp: ExperienceEntry) { this.editingExp = JSON.parse(JSON.stringify(exp)); }
  cancelExpEdit() { this.editingExp = null; }
  newExp() {
    this.editingExp = { role: '', company: '', period: '', bullets: [''], stack: '', displayOrder: 999 } as any;
  }

  addBullet() { this.editingExp?.bullets.push(''); }
  removeBullet(i: number) { this.editingExp?.bullets.splice(i, 1); }
  trackByIndex(i: number) { return i; }
  updateBullet(i: number, value: string) { if (this.editingExp) this.editingExp.bullets[i] = value; }

  saveExp() {
    if (!this.editingExp) return;
    const url = this.editingExp.id ? `/api/v1/admin/experience/${this.editingExp.id}` : '/api/v1/admin/experience';
    const payload = {
      ...this.editingExp,
      bullets: this.editingExp.bullets.map((text, displayOrder) => ({ text, displayOrder })),
    };
    const req = this.editingExp.id ? this.http.put(url, payload) : this.http.post(url, payload);
    req.subscribe({ next: () => { this.editingExp = null; this.portfolioApi.reload(); this.message = 'Experience saved.'; } });
  }

  deleteExp(exp: ExperienceEntry) {
    if (!exp.id || !confirm('Delete this experience?')) return;
    this.http.delete(`/api/v1/admin/experience/${exp.id}`).subscribe(() => this.portfolioApi.reload());
  }

  // ── Projects ──────────────────────────────────────────────────────────────

  editProject(p: ProjectEntry) { this.editingProject = { ...p, tags: [...p.tags] }; }
  cancelProjectEdit() { this.editingProject = null; }
  newProject() { this.editingProject = { name: '', description: '', tags: [], displayOrder: 999 } as any; }

  get projectTagsText(): string { return this.editingProject?.tags.join(', ') ?? ''; }
  set projectTagsText(val: string) {
    if (this.editingProject) this.editingProject.tags = val.split(',').map((t) => t.trim()).filter(Boolean);
  }

  saveProject() {
    if (!this.editingProject) return;
    const url = this.editingProject.id ? `/api/v1/admin/projects/${this.editingProject.id}` : '/api/v1/admin/projects';
    const payload = {
      ...this.editingProject,
      tags: this.editingProject.tags.map((tag, displayOrder) => ({ tag, displayOrder })),
    };
    const req = this.editingProject.id ? this.http.put(url, payload) : this.http.post(url, payload);
    req.subscribe({ next: () => { this.editingProject = null; this.portfolioApi.reload(); this.message = 'Project saved.'; } });
  }

  deleteProject(p: ProjectEntry) {
    if (!p.id || !confirm('Delete this project?')) return;
    this.http.delete(`/api/v1/admin/projects/${p.id}`).subscribe(() => this.portfolioApi.reload());
  }

  // ── Certifications ────────────────────────────────────────────────────────

  editCert(c: CertificationEntry) { this.editingCert = { ...c }; }
  cancelCertEdit() { this.editingCert = null; }
  newCert() { this.editingCert = { name: '', badgeUrl: '', link: '', displayOrder: 999 } as any; }

  saveCert() {
    if (!this.editingCert) return;
    const url = this.editingCert.id ? `/api/v1/admin/certifications/${this.editingCert.id}` : '/api/v1/admin/certifications';
    const req = this.editingCert.id ? this.http.put(url, this.editingCert) : this.http.post(url, this.editingCert);
    req.subscribe({ next: () => { this.editingCert = null; this.portfolioApi.reload(); this.message = 'Certification saved.'; } });
  }

  deleteCert(c: CertificationEntry) {
    if (!c.id || !confirm('Delete?')) return;
    this.http.delete(`/api/v1/admin/certifications/${c.id}`).subscribe(() => this.portfolioApi.reload());
  }

  // ── Education ─────────────────────────────────────────────────────────────

  editEdu(e: EducationEntry) { this.editingEdu = { ...e }; }
  cancelEduEdit() { this.editingEdu = null; }
  newEdu() { this.editingEdu = { name: '', school: '', years: '', displayOrder: 999 } as any; }

  saveEdu() {
    if (!this.editingEdu) return;
    const url = this.editingEdu.id ? `/api/v1/admin/education/${this.editingEdu.id}` : '/api/v1/admin/education';
    const req = this.editingEdu.id ? this.http.put(url, this.editingEdu) : this.http.post(url, this.editingEdu);
    req.subscribe({ next: () => { this.editingEdu = null; this.portfolioApi.reload(); this.message = 'Education saved.'; } });
  }

  deleteEdu(e: EducationEntry) {
    if (!e.id || !confirm('Delete?')) return;
    this.http.delete(`/api/v1/admin/education/${e.id}`).subscribe(() => this.portfolioApi.reload());
  }

  // ── Resume ────────────────────────────────────────────────────────────────

  onAvatarSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.avatarSizeError = false;
    if (file.size > 2 * 1024 * 1024) {
      this.avatarSizeError = true;
      this.avatarFile = null;
      this.avatarPreview = null;
      input.value = '';
      return;
    }
    this.avatarFile = file;
    const reader = new FileReader();
    reader.onload = (e) => (this.avatarPreview = e.target?.result as string);
    reader.readAsDataURL(file);
  }

  clearAvatar(input: HTMLInputElement) {
    this.avatarFile = null;
    this.avatarPreview = null;
    this.avatarSizeError = false;
    input.value = '';
  }

  uploadAvatar(input: HTMLInputElement) {
    if (!this.avatarFile) return;
    this.uploadingAvatar = true;
    this.portfolioApi.uploadAvatar(this.avatarFile).subscribe({
      next: () => {
        this.message = 'Profile picture updated.';
        this.uploadingAvatar = false;
        this.avatarFile = null;
        this.avatarPreview = null;
        input.value = '';
      },
      error: (err) => {
        this.message = err?.error || 'Avatar upload failed.';
        this.uploadingAvatar = false;
      },
    });
  }

  onResumeSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.resumeFile = file;
  }

  clearResume(input: HTMLInputElement) {
    this.resumeFile = null;
    input.value = '';
  }

  uploadResume(input: HTMLInputElement) {
    if (!this.resumeFile) return;
    this.uploadingResume = true;
    this.portfolioApi.uploadResume(this.resumeFile).subscribe({
      next: (_url) => {
        this.message = 'Resume uploaded successfully.';
        this.uploadingResume = false;
        this.resumeFile = null;
        input.value = '';
      },
      error: () => { this.message = 'Upload failed.'; this.uploadingResume = false; },
    });
  }
}
