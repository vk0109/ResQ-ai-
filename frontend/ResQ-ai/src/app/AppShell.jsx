import {
  Activity,
  AlertTriangle,
  ArrowUp,
  Bell,
  Bot,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Flame,
  HeartPulse,
  Home,
  MapPin,
  Menu,
  Mic,
  Settings,
  ShieldAlert,
  Users,
  X,
  LogOut,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const recentItems = [
  { title: "Kitchen Fire", icon: Flame, time: "Today" },
  { title: "Road Accident", icon: AlertTriangle, time: "Yesterday" },
  { title: "Medical Emergency", icon: HeartPulse, time: "2 days ago" },
];

const menuItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "sos", label: "SOS", icon: ShieldAlert },
  { id: "emergency", label: "Emergency AI", icon: Bot },
  { id: "contacts", label: "Trusted Circle", icon: Users },
  { id: "location", label: "Location", icon: MapPin },
  { id: "profile", label: "Profile", icon: CircleUserRound },
  { id: "settings", label: "Settings", icon: Settings },
];

const emergencyTypes = [
  {
    title: "Medical",
    description: "Health emergency",
    icon: HeartPulse,
  },
  {
    title: "Fire",
    description: "Smoke or fire",
    icon: Flame,
  },
  {
    title: "Accident",
    description: "Road accident",
    icon: AlertTriangle,
  },
];

export default function AppShell() {
  const location = useLocation();

  const [active, setActive] = useState(
    location.state?.profileTarget || "home"
  );
  const [message, setMessage] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSOS, setShowSOS] = useState(false);

  const selectMenu = (id) => {
    setActive(id);
    setMobileMenu(false);
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    // AI integration will come here next.
    console.log("Emergency input:", message);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#050b14] text-white selection:bg-sky-400/30">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative flex min-h-screen">
        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="fixed inset-0 z-[80] lg:hidden">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileMenu(false)}
            />

            <aside className="relative h-full w-[290px] border-r border-white/10 bg-[#07101d] p-5">
              <div className="mb-8 flex items-center justify-between">
                <Logo />

                <button
                  onClick={() => setMobileMenu(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <SidebarContent active={active} selectMenu={selectMenu} />
            </aside>
          </div>
        )}

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden w-[280px] shrink-0 border-r border-white/[0.07] bg-[#07101d]/80 lg:block">
          <div className="sticky top-0 flex h-screen flex-col p-5">
            <Logo />

            <div className="mt-8">
              <SidebarContent
                active={active}
                selectMenu={selectMenu}
              />
            </div>

            {/* Recent */}
            <div className="mt-8">
              <div className="mb-3 flex items-center gap-2 px-3">
                <Clock3 size={13} className="text-slate-500" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Recent
                </span>
              </div>

              <div className="space-y-1">
                {recentItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.title}
                      className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/[0.04]"
                    >
                      <Icon
                        size={16}
                        className="text-slate-500 transition group-hover:text-sky-400"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm text-slate-300">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-slate-600">
                          {item.time}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto rounded-2xl border border-sky-400/10 bg-sky-400/[0.04] p-4">
              <div className="flex items-center gap-2">
                <Activity size={15} className="text-sky-400" />

                <span className="text-xs font-medium text-sky-300">
                  System Status
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Core emergency support is available offline.
              </p>

              <div className="mt-3 flex items-center gap-2 text-[11px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Offline Ready
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex min-w-0 flex-1 flex-col">
          {/* TOP BAR */}
          {/* TOP BAR */}
<header className="sticky top-0 z-40 flex h-[76px] items-center justify-between border-b border-white/[0.07] bg-[#050b14]/80 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
  <div className="flex items-center gap-3">
    <button
      onClick={() => setMobileMenu(true)}
      className="rounded-xl border border-white/10 p-2 text-slate-400 hover:text-white lg:hidden"
    >
      <Menu size={20} />
    </button>

    <div className="lg:hidden">
      <Logo compact />
    </div>

    <div className="hidden sm:block">
      <p className="text-sm font-medium">
        Emergency Assistant
      </p>

      <div className="mt-0.5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="text-[11px] text-slate-500">
          Offline Ready
        </span>
      </div>
    </div>
  </div>

  <div className="flex items-center gap-2 sm:gap-3">
    <button
      className="rounded-xl p-2.5 text-slate-400 transition hover:bg-white/5 hover:text-white"
      aria-label="Notifications"
    >
      <Bell size={19} />
    </button>

    <div className="hidden h-7 w-px bg-white/10 sm:block" />

    <button
      onClick={() => setActive("profile")}
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-1.5 transition hover:bg-white/[0.06]"
    >
      <CircleUserRound
        size={21}
        className="text-sky-400"
      />

      <span className="hidden text-sm text-slate-300 sm:block">
        {(() => {
          try {
            const user = JSON.parse(
              localStorage.getItem("resqai_user") || "{}"
            );

            return user.name || "User";
          } catch {
            return "User";
          }
        })()}
      </span>
    </button>
  </div>
</header>

          {/* CONTENT */}
          <div className="flex-1 overflow-y-auto">
            {active === "home" && (
              <HomeView
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
                setShowSOS={setShowSOS}
                selectMenu={selectMenu}
              />
            )}

            {active === "sos" && (
              <SOSView setShowSOS={setShowSOS} />
            )}

            {active === "emergency" && (
              <EmergencyView
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
              />
            )}

           {active === "contacts" && <ContactsView />}
            {active === "location" && <LocationView />}
            {active === "profile" && <ProfileView />}
            {active === "settings" && <SettingsView />}
          </div>
        </main>
      </div>

      {/* SOS MODAL */}
      {showSOS && <SOSModal onClose={() => setShowSOS(false)} />}
    </div>
  );
}

/* ---------------- LOGO ---------------- */

function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 shadow-[0_0_30px_rgba(56,189,248,0.08)]">
        <ShieldAlert size={20} className="text-sky-400" />

        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
      </div>

      {!compact && (
        <div>
          <h1 className="text-lg font-bold tracking-tight">
            RESQ<span className="text-sky-400">-AI</span>
          </h1>

          <p className="text-[9px] uppercase tracking-[0.22em] text-slate-600">
            Emergency Intelligence
          </p>
        </div>
      )}
    </div>
  );
}

/* ---------------- SIDEBAR ---------------- */

function SidebarContent({ active, selectMenu }) {
  return (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const selected = active === item.id;

        return (
          <button
            key={item.id}
            onClick={() => selectMenu(item.id)}
            className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
              selected
                ? "border border-sky-400/10 bg-sky-400/[0.09] text-sky-300"
                : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            <Icon
              size={18}
              className={
                selected
                  ? "text-sky-400"
                  : "text-slate-500 group-hover:text-slate-300"
              }
            />

            <span className="flex-1 text-sm">{item.label}</span>

            {selected && (
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
            )}
          </button>
        );
      })}
    </nav>
  );
}

/* ---------------- HOME ---------------- */

function HomeView({
  message,
  setMessage,
  sendMessage,
  setShowSOS,
  selectMenu,
}) {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-5xl flex-col px-5 py-8 sm:px-8 lg:px-12">
      <div className="flex-1">
        <div className="mx-auto max-w-3xl pt-8 text-center sm:pt-14">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/[0.07] shadow-[0_0_50px_rgba(56,189,248,0.08)]">
            <Bot size={30} className="text-sky-400" />
          </div>

          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-sky-400/80">
            Offline Emergency Intelligence
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            How can I help you?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Describe what is happening. RESQ-AI identifies the
            emergency and provides short, verified guidance.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {emergencyTypes.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  onClick={() => selectMenu("emergency")}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/20 hover:bg-sky-400/[0.04]"
                >
                  <Icon
                    size={20}
                    className="text-sky-400 transition group-hover:scale-110"
                  />

                  <p className="mt-3 text-sm font-medium">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-600">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* COMPOSER */}
      <div className="mx-auto mt-10 w-full max-w-3xl">
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-2 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition focus-within:border-sky-400/30">
          <div className="flex items-end gap-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              rows={2}
              placeholder="Describe what's happening..."
              className="min-h-[52px] flex-1 resize-none bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-600"
            />

            <button
              className="mb-1 rounded-xl p-3 text-slate-500 transition hover:bg-white/5 hover:text-sky-400"
              title="Voice input"
            >
              <Mic size={19} />
            </button>

            <button
              onClick={sendMessage}
              className="mb-1 rounded-xl bg-sky-400 p-3 text-slate-950 transition hover:bg-sky-300"
            >
              <ArrowUp size={19} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between px-1">
          <p className="text-[10px] text-slate-700">
            RESQ-AI can work offline after installation.
          </p>

          <button
            onClick={() => setShowSOS(true)}
            className="flex items-center gap-2 text-xs font-semibold text-red-400 transition hover:text-red-300"
          >
            <ShieldAlert size={14} />
            SOS
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- EMERGENCY ---------------- */

function EmergencyView({ message, setMessage, sendMessage }) {
  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="AI Decision Support"
        title="Emergency Assistant"
        description="Describe the situation and RESQ-AI will identify the emergency category."
      />

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-8">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Example: There is smoke coming from my kitchen..."
          className="min-h-44 w-full resize-none rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white outline-none placeholder:text-slate-600 focus:border-sky-400/30"
        />

        <button
          onClick={sendMessage}
          className="mt-4 flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-300"
        >
          Analyze Emergency
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
}

/* ---------------- SOS ---------------- */

function SOSView({ setShowSOS }) {
  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Emergency"
        title="SOS"
        description="Contact your trusted person when you need immediate assistance."
      />

      <div className="mt-10 rounded-3xl border border-red-400/10 bg-red-500/[0.035] p-8 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-red-400/20 bg-red-500/10">
          <ShieldAlert size={42} className="text-red-400" />
        </div>

        <h3 className="mt-7 text-xl font-semibold">
          Need immediate help?
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          RESQ-AI can prepare an SOS containing your location for
          your selected trusted contact.
        </p>

        <button
          onClick={() => setShowSOS(true)}
          className="mt-7 rounded-xl bg-red-500 px-8 py-3 font-semibold text-white transition hover:bg-red-400"
        >
          Activate SOS
        </button>
      </div>
    </div>
  );
}

/* ---------------- CONTACTS ---------------- */

function ContactsView() {
  const [contact, setContact] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("resqai_trusted_contact") || "null"
      );
    } catch {
      return null;
    }
  });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const saveContact = () => {
    if (!name.trim() || !phone.trim()) return;

    const newContact = {
      name: name.trim(),
      phone: phone.trim(),
    };

    localStorage.setItem(
      "resqai_trusted_contact",
      JSON.stringify(newContact)
    );

    setContact(newContact);
    setName("");
    setPhone("");
  };

  const removeContact = () => {
    localStorage.removeItem("resqai_trusted_contact");
    setContact(null);
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Safety Network"
        title="Trusted Circle"
        description="Choose a trusted parent, guardian, or adult for emergency assistance."
      />

      {!contact ? (
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-400/10">
            <Users className="text-sky-400" />
          </div>

          <h3 className="mt-5 font-medium">
            Add Trusted Contact
          </h3>

          <div className="mt-5 space-y-3">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Parent / guardian name"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-sky-400/30"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              type="tel"
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-sky-400/30"
            />

            <button
              onClick={saveContact}
              disabled={!name.trim() || !phone.trim()}
              className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Save Trusted Contact
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.03] p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-400/10">
              <Users className="text-sky-400" />
            </div>

            <div className="flex-1">
              <p className="font-medium">{contact.name}</p>
              <p className="mt-1 text-sm text-slate-500">
                {contact.phone}
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            <a
              href={`tel:${contact.phone}`}
              className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Call
            </a>

            <button
              onClick={removeContact}
              className="rounded-xl border border-red-400/10 px-5 py-3 text-sm text-red-400"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- LOCATION ---------------- */

function LocationView() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getLocation = () => {
    setLoading(true);
    setError("");
    setAddress("");

    if (!navigator.geolocation) {
      setError("Location is not supported by this browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude, accuracy } = position.coords;

        setLocation({
          latitude,
          longitude,
          accuracy: Math.round(accuracy),
        });

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );

          if (!response.ok) {
            throw new Error("Address lookup failed");
          }

          const data = await response.json();

          setAddress(
            data.display_name || "Address unavailable"
          );
        } catch (err) {
          console.error(err);
          setAddress("Address unavailable");
        }

        setLoading(false);
      },
      (err) => {
        setLoading(false);

        if (err.code === 1) {
          setError("Location permission was denied.");
        } else if (err.code === 2) {
          setError("Unable to determine your location.");
        } else if (err.code === 3) {
          setError("Location request timed out.");
        } else {
          setError("Unable to get your location.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 30000,
      }
    );
  };

  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="LOCATION"
        title="Your Location"
        subtitle="Find your current location when you need emergency assistance."
      />

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <button
          onClick={getLocation}
          disabled={loading}
          className="rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-400 disabled:opacity-50"
        >
          {loading ? "Finding location..." : "Get My Location"}
        </button>

        {error && (
          <p className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}

        {location && (
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Current Location
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                {address || "Finding address..."}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs text-slate-500">Latitude</p>
                <p className="mt-1 text-sm text-slate-200">
                  {location.latitude.toFixed(6)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs text-slate-500">Longitude</p>
                <p className="mt-1 text-sm text-slate-200">
                  {location.longitude.toFixed(6)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs text-slate-500">Accuracy</p>
                <p className="mt-1 text-sm text-slate-200">
                  ~{location.accuracy} m
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10">
              <MapContainer
                center={[
                  location.latitude,
                  location.longitude,
                ]}
                zoom={17}
                scrollWheelZoom={true}
                style={{ height: "380px", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[
                    location.latitude,
                    location.longitude,
                  ]}
                >
                  <Popup>
                    <strong>Your RESQ-AI location</strong>
                    <br />
                    {address || "Current location"}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- SETTINGS ---------------- */

function SettingsView() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Preferences"
        title="Settings"
        description="Manage RESQ-AI preferences and privacy."
      />

      <div className="mt-8 space-y-3">
        {[
          ["Language", "English"],
          ["Offline Database", "Available"],
          ["Privacy", "Location only when requested"],
          ["Emergency History", "Local"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-5"
          >
            <span className="text-sm">{title}</span>
            <span className="text-xs text-slate-500">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SOS MODAL ---------------- */

function SOSModal({ onClose }) {
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-5 backdrop-blur-md">
      <div className="w-full max-w-md rounded-3xl border border-red-400/20 bg-[#09111e] p-7 shadow-2xl">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
            <ShieldAlert className="text-red-400" />
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white"
          >
            <X size={19} />
          </button>
        </div>

        <h2 className="mt-6 text-2xl font-semibold">
          Activate SOS?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Your current location can be shared with your selected
          trusted contact. This action requires confirmation.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-sky-400" />

            <div>
              <p className="text-sm">Location</p>
              <p className="text-xs text-slate-600">
                Requested only after confirmation
              </p>
            </div>
          </div>
        </div>

        <label className="mt-5 flex cursor-pointer gap-3 text-xs text-slate-500">
          <input
            type="checkbox"
            checked={confirm}
            onChange={(e) => setConfirm(e.target.checked)}
            className="mt-0.5 accent-sky-400"
          />

          I understand that SOS is an emergency action.
        </label>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/10 py-3 text-sm text-slate-400 hover:bg-white/5"
          >
            Cancel
          </button>

          <button
            disabled={!confirm}
            className="flex-1 rounded-xl bg-red-500 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-30"
          >
            Confirm SOS
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-400/70">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight">
        {title}
      </h2>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}
function ProfileView() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("resqai_user");

  let user = null;

  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch {
    user = null;
  }

  const name = user?.name || "RESQ-AI User";
  const email = user?.email || "No email available";
  const verified = user?.isEmailVerified ?? true;

  const handleLogout = () => {
    localStorage.removeItem("resqai_session_token");
    localStorage.removeItem("resqai_user");
    localStorage.removeItem("resqai_email_verified");

    navigate("/login", { replace: true });
  };

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Your Account"
        title="Profile"
        description="Your RESQ-AI account information."
      />

      <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
        {/* Profile header */}
        <div className="border-b border-white/10 bg-sky-400/[0.035] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10">
              <CircleUserRound
                size={38}
                className="text-sky-400"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                {name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                RESQ-AI User
              </p>

              {verified && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.06] px-3 py-1.5 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Email verified
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Account details */}
        <div className="p-6 sm:p-8">
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Name
              </p>

              <p className="mt-2 text-sm text-slate-200">
                {name}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Email
              </p>

              <p className="mt-2 break-all text-sm text-slate-200">
                {email}
              </p>
            </div>
          </div>

         <button
  onClick={() => navigate("/app", { state: { profileTarget: "contacts" } })}
  className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-4 text-left transition hover:border-sky-400/20 hover:bg-sky-400/[0.03]"
>
  <div>
    <p className="text-sm">Trusted Circle</p>
    <p className="mt-1 text-xs text-slate-600">
      Add a trusted parent or guardian
    </p>
  </div>

  <ChevronRight
    size={17}
    className="text-slate-600"
  />
</button>

            <button
  onClick={() => navigate("/app", { state: { profileTarget: "contacts" } })}
  className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-4 text-left transition hover:border-sky-400/20 hover:bg-sky-400/[0.03]"
>
  <div>
    <p className="text-sm">Trusted Circle</p>
    <p className="mt-1 text-xs text-slate-600">
      Add a trusted parent or guardian
    </p>
  </div>

  <ChevronRight
    size={17}
    className="text-slate-600"
  />
</button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/10 bg-red-400/[0.04] py-3 text-sm font-medium text-red-400 transition hover:bg-red-400/[0.08]"
          >
            <LogOut size={17} />
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}