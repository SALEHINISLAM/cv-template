import type { Route } from './+types/architectural-project-manager';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Architectural Project Manager CV" },
    { name: "description", content: "Civil Engineer CV" }
  ];
}

export default function ArchitecturalProjectManager() {
  return (
    <div>architectural-project-manager</div>
  )
}
