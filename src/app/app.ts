import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  computed,
  signal,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  LucideArrowUpRight,
  LucideBrain,
  LucideChevronRight,
  LucideCode,
  LucideDatabase,
  LucideDownload,
  LucideExternalLink,
  LucideMapPin,
  LucideMenu,
  LucideMoon,
  LucideSend,
  LucideSmartphone,
  LucideSun,
  LucideX,
} from '@lucide/angular';
import {
  CERTIFICATIONS,
  EDUCATION,
  ENGAGEMENTS,
  EXPERIENCES,
  LANGUAGES,
  PROFILE,
  PROJECTS,
  SKILLS,
  SOCIALS,
  STATS,
} from './core/data/portfolio.data';
import { ProjectCategory } from './core/models/portfolio.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LucideArrowUpRight,
    LucideBrain,
    LucideChevronRight,
    LucideCode,
    LucideDatabase,
    LucideDownload,
    LucideExternalLink,
    LucideMapPin,
    LucideMenu,
    LucideMoon,
    LucideSend,
    LucideSmartphone,
    LucideSun,
    LucideX,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements AfterViewInit, OnDestroy {
  readonly profile = PROFILE;
  readonly socials = SOCIALS;
  readonly stats = STATS;
  readonly skills = SKILLS;
  readonly projects = PROJECTS;
  readonly experiences = EXPERIENCES;
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;
  readonly languages = LANGUAGES;
  readonly engagements = ENGAGEMENTS;

  readonly navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'apropos', label: 'À propos' },
    { id: 'competences', label: 'Compétences' },
    { id: 'projets', label: 'Projets' },
    { id: 'parcours', label: 'Parcours' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  readonly categories: Array<'Tous' | ProjectCategory> = ['Tous', 'Web', 'Mobile', 'IA', 'IoT'];
  readonly selectedCategory = signal<'Tous' | ProjectCategory>('Tous');
  readonly previewProject = signal<{ title: string; url: string; safeUrl: SafeResourceUrl } | null>(null);
  readonly mobileMenuOpen = signal(false);
  readonly darkMode = signal(false);
  readonly activeSection = signal('accueil');
  readonly year = new Date().getFullYear();

  readonly filteredProjects = computed(() => {
    const category = this.selectedCategory();
    return category === 'Tous'
      ? this.projects
      : this.projects.filter((project) => project.category === category);
  });

  private observer?: IntersectionObserver;

  constructor(private readonly sanitizer: DomSanitizer) {
    const storedTheme = localStorage.getItem('portfolio-theme');
    const systemPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    const isDark = storedTheme ? storedTheme === 'dark' : systemPrefersDark;
    this.applyTheme(isDark);
  }

  ngAfterViewInit(): void {
    const sections = this.navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          this.activeSection.set(visible.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.2, 0.5, 0.8],
      },
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleTheme(): void {
    const next = !this.darkMode();
    this.applyTheme(next);
    localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
  }

  private applyTheme(isDark: boolean): void {
    this.darkMode.set(isDark);
    document.documentElement.dataset['theme'] = isDark ? 'dark' : 'light';
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#11130f' : '#f4f2eb');
  }

  toggleMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  selectCategory(category: 'Tous' | ProjectCategory): void {
    this.selectedCategory.set(category);
  }

  openPreview(project: { title: string; liveUrl?: string }): void {
    if (project.liveUrl) this.previewProject.set({
      title: project.title,
      url: project.liveUrl,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(project.liveUrl),
    });
  }

  closePreview(): void {
    this.previewProject.set(null);
  }

  safePreviewUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  scrollTo(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
  }

  sendMessage(event: Event): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? 'Projet / collaboration').trim();
    const message = String(data.get('message') ?? '').trim();

    const body = [
      `Bonjour Barnabé,`,
      '',
      message,
      '',
      `— ${name}`,
      email ? `Email : ${email}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${this.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
