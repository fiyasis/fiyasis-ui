import {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Spinner,
} from "./components";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">{title}</h2>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
            F
          </span>
          <span className="text-xl font-bold text-slate-900">Fiyasis UI</span>
          <Badge variant="info">v0.1.0</Badge>
        </div>
        <p className="text-slate-600">
          A modern, accessible React + Tailwind CSS component library.
        </p>
      </header>

      <div className="grid gap-6">
        <Section title="Buttons">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button isLoading>Loading</Button>
        </Section>

        <Section title="Badges">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
        </Section>

        <Section title="Avatars & Spinner">
          <Avatar name="Fiyasis Team" size="sm" />
          <Avatar name="Fiyasis Team" />
          <Avatar name="Fiyasis Team" size="lg" />
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
        </Section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Card</CardTitle>
            </CardHeader>
            <CardContent>
              A reusable card with header, content and footer sections.
            </CardContent>
            <CardFooter>
              <Button size="sm">View</Button>
              <Button size="sm" variant="ghost">
                Dismiss
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <Input label="Email" placeholder="you@fiyasis.com" />
              <Input label="Password" type="password" error="Password is required" />
            </CardContent>
          </Card>
        </section>

        <Section title="Alerts">
          <div className="grid w-full gap-3">
            <Alert variant="info" title="Heads up">
              This is an informational alert.
            </Alert>
            <Alert variant="success">Operation completed successfully.</Alert>
            <Alert variant="warning">Please review before continuing.</Alert>
            <Alert variant="error">Something went wrong.</Alert>
          </div>
        </Section>
      </div>

      <footer className="mt-12 text-center text-sm text-slate-500">
        Built by{" "}
        <a className="font-medium text-brand hover:underline" href="https://www.fiyasis.com">
          Fiyasis
        </a>
      </footer>
    </div>
  );
}
