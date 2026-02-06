interface PageHeaderProps {
  title: string
  description: string
  breadcrumbs?: { name: string; href: string }[]
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-24 pb-12 lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <li>
                <a href="/" className="hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <span>/</span>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-primary-foreground">{crumb.name}</span>
                  ) : (
                    <a href={crumb.href} className="hover:text-primary-foreground transition-colors">
                      {crumb.name}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl font-serif text-balance">
          {title}
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/90 max-w-3xl text-pretty">{description}</p>
      </div>
    </section>
  )
}
