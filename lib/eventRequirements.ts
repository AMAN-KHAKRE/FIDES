export type Requirement = {
  id: string;
  name: string;
  category: string;
  description: string;
  priority: "Essential" | "Recommended" | "Optional";
  quantity?: string;
};

const common: Requirement[] = [
  { id: "venue", name: "Venue", category: "Venue & Setup", description: "Venue sourcing, capacity and availability", priority: "Essential" },
  { id: "catering", name: "Catering", category: "Food & Beverage", description: "Menu, service style and guest count", priority: "Essential", quantity: "Per guest" },
  { id: "decoration", name: "Decoration", category: "Design & Decor", description: "Theme, stage, florals and venue styling", priority: "Essential" },
  { id: "photography", name: "Photography & Video", category: "Media", description: "Photography, cinematography and deliverables", priority: "Recommended" },
  { id: "transport", name: "Transportation", category: "Logistics", description: "Guest transfers and event logistics", priority: "Recommended" },
  { id: "security", name: "Security", category: "Operations", description: "Security personnel and access management", priority: "Recommended" },
];

const byEventType: Record<string, Requirement[]> = {
  Wedding: [
    { id: "music", name: "Music / DJ", category: "Entertainment", description: "DJ, sound system and entertainment", priority: "Essential" },
    { id: "invitations", name: "Invitations", category: "Guest Experience", description: "Digital or printed invitations", priority: "Recommended" },
    { id: "bridal", name: "Bridal / Groom Services", category: "Personal Services", description: "Makeup, styling and grooming", priority: "Recommended" },
    { id: "gifts", name: "Return Gifts", category: "Guest Experience", description: "Guest favors and gifting", priority: "Optional" },
  ],
  "Corporate Event": [
    { id: "av", name: "Audio Visual", category: "Production", description: "Screens, microphones, presentation and AV support", priority: "Essential" },
    { id: "branding", name: "Branding & Signage", category: "Brand Experience", description: "Stage branding, standees and directional signage", priority: "Essential" },
    { id: "registration", name: "Registration Desk", category: "Guest Experience", description: "Check-in desk, badges and attendee management", priority: "Recommended" },
  ],
  "Birthday": [
    { id: "cake", name: "Cake & Desserts", category: "Food & Beverage", description: "Custom cake and dessert setup", priority: "Essential" },
    { id: "entertainment", name: "Entertainment", category: "Entertainment", description: "Games, performer or activity setup", priority: "Recommended" },
  ],
  "Social Gathering": [
    { id: "music-social", name: "Music", category: "Entertainment", description: "Music and sound setup", priority: "Recommended" },
    { id: "activities", name: "Activities", category: "Guest Experience", description: "Games and activities for guests", priority: "Optional" },
  ],
};

export function generateRequirements(eventType: string, guests?: number): Requirement[] {
  const specific = byEventType[eventType] ?? [];
  return [...common, ...specific].map((item) => ({
    ...item,
    quantity: item.quantity ?? (item.id === "security" && guests ? `${Math.max(2, Math.ceil(guests / 100))} staff` : undefined),
  }));
}
