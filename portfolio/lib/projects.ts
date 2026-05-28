export interface Project {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  category: string;
  status: "live" | "in-progress" | "completed";
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  problem: string;
  solution: string;
  highlights: { label: string; value: string }[];
  features: { title: string; items: string[] }[];
  architecture: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "laboratory-management-system",
    name: "Laboratory Management System",
    tagline: "Full-stack clinical lab platform with WhatsApp notifications, Keycloak RBAC, and automated patient report delivery.",
    category: "Enterprise Platform",
    status: "live",
    liveUrl: "https://lab.fenyxn.in",
    githubUrl: "https://github.com/Fenyxn/Laboratory-Management-System",
    stack: [
      "Python", "FastAPI", "Next.js", "TypeScript",
      "PostgreSQL", "Keycloak", "WhatsApp API", "Node.js",
      "Docker", "Nginx", "GCP", "GitHub Actions",
    ],
    description:
      "A production-deployed laboratory management system for clinical labs — managing patients, tests, billing, and reports with automated WhatsApp notifications and Keycloak role-based access control. Fully containerized and deployed on Google Cloud Platform.",
    problem:
      "Clinical labs struggle with manual test tracking, paper-based patient records, and no automated communication with patients — leading to delays, errors, and poor patient experience.",
    solution:
      "A unified platform with a FastAPI backend, Next.js frontend, and a dedicated WhatsApp microservice (Node.js). Admins manage labs, patients, and test results from a single dashboard. Patients receive automated WhatsApp messages for appointments, reports, and billing — all secured via Keycloak group-based RBAC.",
    highlights: [
      { label: "Deployment", value: "Live on GCP" },
      { label: "Auth", value: "Keycloak RBAC" },
      { label: "Notifications", value: "WhatsApp API" },
      { label: "Services", value: "5 Docker containers" },
    ],
    features: [
      {
        title: "Patient Management",
        items: [
          "Register and manage patient records with full history",
          "Track test orders and sample collection status",
          "Generate, store, and deliver lab reports digitally",
          "Billing and invoice management per patient",
        ],
      },
      {
        title: "Lab Administration",
        items: [
          "Multi-lab support with owner-based access isolation",
          "Keycloak group-based role management per lab",
          "Admin dashboard for system-wide control and analytics",
          "Lab-level configuration — owner_username, keycloak_group_id",
        ],
      },
      {
        title: "WhatsApp Notifications",
        items: [
          "Dedicated Node.js WhatsApp microservice",
          "Automated patient notifications — report ready, appointments",
          "Real-time delivery status tracking",
          "Decoupled from main API for fault tolerance",
        ],
      },
      {
        title: "Infrastructure & DevOps",
        items: [
          "5 Docker containers: FastAPI, Next.js, PostgreSQL, Keycloak, WhatsApp",
          "GitHub Actions CI/CD pipeline for automated deploys",
          "Nginx reverse proxy with SSL via Certbot",
          "Deployed and tested end-to-end on Google Cloud Platform",
        ],
      },
    ],
    architecture:
      "FastAPI backend with patient, admin, and system routers — all JWT-verified via Keycloak. PostgreSQL stores all relational data with auto-migration on startup (ALTER TABLE IF NOT EXISTS). Next.js frontend communicates through a proxy layer. A separate Node.js WhatsApp service handles all notification delivery asynchronously. All five services orchestrated via Docker Compose on GCP with Nginx as the entry point.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4",
  },

  {
    slug: "spacetime",
    name: "SpaceTime",
    tagline: "High-throughput market data platform processing 10,000+ ticks/sec with real-time Space-Time Reversal Indicators and multi-chart visualization.",
    category: "Fintech · Market Data Platform",
    status: "completed",
    stack: [
      "Python", "FastAPI", "Next.js", "TypeScript",
      "Redis Pub/Sub", "InfluxDB", "PostgreSQL",
      "WebSocket", "NumPy", "TradingView Lightweight Charts",
      "Keycloak", "Docker", "Nginx", "AWS", "GitHub Actions",
    ],
    description:
      "A production-grade microservices platform that ingests 10,000+ market ticks per second from a live DTN feed, computes real-time Space-Time Indicators (smoothing, intensity, reversals, spikes), and streams them to a multi-chart Next.js frontend via WebSocket. Includes 4 versions of a custom Reversal Indicator developed over 5 months of live market testing.",
    problem:
      "Processing 10,000+ ticks/sec from a live market feed, computing complex indicators (SMA/EMA/ZLMA smoothing, intensity, reversal detection) in real time, and simultaneously distributing data across multiple chart instances — without data loss, lag, or performance degradation.",
    solution:
      "A Redis Pub/Sub pipeline decouples ingestion from distribution. NumPy vectorized arrays replace pandas for 10x computation speed. InfluxDB handles time-series storage for historical and spike data. An API Gateway aggregates and batches WebSocket messages (TradingView-style) to handle peak market throughput. The frontend uses an event bus to update charts independently.",
    highlights: [
      { label: "Throughput", value: "10,000+ ticks/sec" },
      { label: "Reversal versions", value: "v1 · v2 · v3 · v4" },
      { label: "Uptime", value: "Production deployed" },
      { label: "Compute", value: "NumPy vectorized" },
    ],
    features: [
      {
        title: "Real-Time Data Pipeline",
        items: [
          "DTN live market feed ingestion at 10,000+ ticks/sec",
          "Redis Pub/Sub for zero-latency inter-microservice messaging",
          "10,000-entry Redis buffer queue to eliminate data loss under peak load",
          "NumPy vectorized sliding windows replacing pandas for 10x speed",
          "InfluxDB v3 for time-series spike and intensity historical storage",
          "PostgreSQL for relational data and OHLCV candle storage",
        ],
      },
      {
        title: "Space-Time Indicators",
        items: [
          "Intensity formula with SMA, EMA, and ZLMA smoothing types",
          "Spike detection with historical bulk-load and live event streaming",
          "Space-Time Reversal Indicator in 4 versions — live market tested",
          "v1: intensity + adaptive buffer with CV scaling",
          "v2: price + intensity with momentum confirmation",
          "v3: intensity + high/low timeframe trend + volume gate",
          "v4: EMA crossover + choppy market filter + volume spike confirmation",
          "Adaptive buffer with 80:20 ratio and 1000-tick window for noise reduction",
        ],
      },
      {
        title: "Multi-Chart Frontend",
        items: [
          "TradingView Lightweight Charts: smoothing line, candle, marker, volume, spike",
          "Event bus architecture — charts update independently without re-renders",
          "OHLCV candle chart with multi-timeframe support (1s, 10s, 1m and more)",
          "Live in-progress candle updates with price tags and reversal markers",
          "ZLMA volume series (purple line) overlay on candle chart",
          "Intensity bars with threshold-based logic and animation",
          "Historical range queries with initial 10-minute bulk load on connect",
          "Auto-scaling, dynamic chart resize on window change",
          "Dark/light theme with centralized CSS variable system",
          "Fully responsive mobile layout with hamburger sidebar",
        ],
      },
      {
        title: "Production Infrastructure",
        items: [
          "Message batching at API Gateway — TradingView-style grouped messages",
          "Backpressure handling to prevent overload during peak market hours",
          "WebSocket auto-reconnect with exponential backoff",
          "Keycloak authentication with JWT token refresh handling",
          "Race condition resolution with session locking for concurrency safety",
          "GitHub Actions CI/CD — automated Docker deploy on push",
          "Nginx reverse proxy + Certbot SSL on Linux (AWS)",
          "InfluxDB v3 with SQL queries and optimized config for production",
        ],
      },
    ],
    architecture:
      "DTN feed → Live Service (NumPy processing) → Redis Pub/Sub → API Gateway (message batching, backpressure) → WebSocket → Next.js (event bus → independent chart state managers). Historical Service (separate microservice) → InfluxDB v3 for spike/intensity history. All services containerized via Docker Compose. GitHub Actions deploys to AWS Linux server on every push to main.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
  },

  {
    slug: "trendedge",
    name: "TrendEdge",
    tagline: "Real-time Supertrend trading platform with automated Zerodha order execution, multi-symbol support, and forward testing.",
    category: "Fintech · Trading Automation",
    status: "completed",
    stack: [
      "Python", "FastAPI", "Next.js", "TypeScript",
      "Zerodha KiteTicker", "Socket.IO", "PostgreSQL",
      "StockStats", "Keycloak", "Docker",
    ],
    description:
      "A production-grade trading automation platform integrated with Zerodha — computing Supertrend and ATR indicators on live tick data, auto-executing equity and options orders, supporting multi-symbol subscription, and providing a real-time dashboard with trade logs, portfolio tracking, and forward testing mode.",
    problem:
      "Manually trading on Zerodha across multiple symbols requires constant attention, error-prone order placement, and slow reaction times — especially for options strategies that depend on rapid Supertrend signal reversals at exact price levels.",
    solution:
      "A FastAPI backend auto-logs into Zerodha at 8:30 AM, saves access tokens to PostgreSQL for reuse, subscribes to live KiteTicker WebSocket feeds, computes Supertrend/ATR via StockStats, and executes orders automatically. A Socket.IO bridge streams everything to the Next.js frontend — including trade logs, positions, and P&L — in real time.",
    highlights: [
      { label: "Login", value: "Auto 8:30 AM" },
      { label: "Indicators", value: "Supertrend · ATR" },
      { label: "Segments", value: "Equity · FNO · Options" },
      { label: "Testing", value: "Forward test mode" },
    ],
    features: [
      {
        title: "Zerodha Integration",
        items: [
          "Automated Zerodha login exactly at 8:30 AM daily",
          "Access token stored in PostgreSQL — reused to avoid redundant logins",
          "Historical data fetched at 2+ req/sec with Zerodha rate limit management",
          "KiteTicker WebSocket for live tick streaming as indicator source",
          "Instrument fetch on login — NFO filtered and stored per exchange",
          "Multi-symbol concurrent subscription with one-by-one rate-limited registration",
        ],
      },
      {
        title: "Indicator & Signal Engine",
        items: [
          "Supertrend and ATR computed using StockStats library",
          "Incremental historical data fetch in loop on startup",
          "Signals generated on Supertrend reversal crossovers",
          "Option chain integration — auto strike selection based on spot price and level",
          "Auto expiry detection for derivatives with strike price logic",
          "Volume EMA indicator (v2) for reversal confirmation at high volume",
        ],
      },
      {
        title: "Order Execution",
        items: [
          "Live equity, FNO, and options order placement via Zerodha REST API",
          "Forward test mode with virtual capital — simulates execution without real orders",
          "Exit condition per individual trade with immediate position close",
          "Cancel order logic for live mode",
          "Order fill confirmation with IST timestamp saved to PostgreSQL",
          "Margin validation before order placement",
          "Auto lot-size fill for derivatives in quantity field",
        ],
      },
      {
        title: "Frontend Dashboard",
        items: [
          "Real-time dashboard with market time, open positions, and P&L",
          "Trade logs page — live + historical, IST formatted, responsive",
          "Portfolio page — holdings and positions from Zerodha DEMAT",
          "Settings page — indicator config, symbol selector, timeframe",
          "Sidebar navigation with pages: Dashboard, Logs, Portfolio, Settings",
          "Candlestick animation landing page with Keycloak SSO login",
          "Fully responsive across mobile, tablet, and desktop",
          "Theme support (dark/light) across all components",
        ],
      },
    ],
    architecture:
      "FastAPI backend with Keycloak JWT auth manages Zerodha session, indicator computation, and order execution. Socket.IO bridges backend events (ticks, signals, orders, positions) to the Next.js frontend in real time. PostgreSQL stores tokens, instruments, trade history, and strategy configs. Forward test broker and live Zerodha broker share the same BrokerABC interface for seamless switching. Docker Compose handles all services.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
  },

  {
    slug: "company-management-system",
    name: "Company Management System",
    tagline: "Full-stack enterprise platform with project tracking, invoicing, GST billing, salary slips, finance reports, and Keycloak RBAC with Google login.",
    category: "Enterprise Platform",
    status: "completed",
    stack: [
      "Python", "FastAPI", "Next.js", "TypeScript",
      "PostgreSQL", "Keycloak", "JWT", "Google OAuth",
      "PDF Canvas", "FullCalendar", "REST API",
    ],
    description:
      "A comprehensive company management system built for internal operations — covering project and task management, client and developer invoicing with PDF generation, GST/LUT billing for Indian and foreign clients, employee management with salary slips, finance reports, and expense tracking. Secured with Keycloak including Google login, role-based access, and group-based permissions.",
    problem:
      "An enterprise company managing multiple projects, clients, freelancers, and internal employees across invoicing, payments, and reporting relied on disconnected spreadsheets — with no unified system for project tracking, billing, or financial reporting.",
    solution:
      "A FastAPI backend with domain-separated modules and a type-safe Next.js frontend. Keycloak handles SSO with Google login and role-based groups for employees, freelancers, and admins. FullCalendar manages task scheduling. PDF generation produces professional invoices and salary slips. Finance reports provide filtered views of GST, TDS, client and developer payments.",
    highlights: [
      { label: "Auth", value: "Keycloak + Google" },
      { label: "Invoicing", value: "GST · LUT · PDF" },
      { label: "Modules", value: "7 core modules" },
      { label: "Users", value: "Multi-role RBAC" },
    ],
    features: [
      {
        title: "Project & Task Management",
        items: [
          "Project creation with developer assignment and profit ratio tracking",
          "Task management with custom status colors (completed, in-progress, cancelled)",
          "Calendar-based task scheduling with FullCalendar integration",
          "Today / This week / Next week task views",
          "Task assignment to Keycloak members — shown via dropdown",
          "Comments section with edit, delete, and timestamped history",
          "Completed tasks tab with 50-task limit and tick-icon completion flow",
        ],
      },
      {
        title: "Invoicing & Billing",
        items: [
          "Client invoices with GST (CGST/SGST) for Indian clients",
          "LUT-based invoices for foreign clients — company name, GSTIN auto-populated",
          "Developer invoices with validation against quotation limits",
          "Invoice preview page before PDF download",
          "PDF generation using canvas library with logo, signature, and rupee symbol",
          "Salary slips with PF, ESIC auto-calculation based on working days",
          "Non-GST and TDS transaction tracking",
        ],
      },
      {
        title: "Finance & Reports",
        items: [
          "Client payment report with filters",
          "Developer payment report with filters",
          "GST sales report with total sales summary",
          "TDS transaction table",
          "Non-GST transaction table",
          "Company profit displayed in rupees per project",
          "Developer profit ratio auto-adjusted to sum to 100%",
        ],
      },
      {
        title: "HR & People Management",
        items: [
          "Employee management — add, edit, remove with Keycloak integration",
          "Freelancer management with separate billing and detail pages",
          "Client management with Indian/foreign classification",
          "Salary slip generation with ESIC no, PF number, allowances",
          "Inhouse developer tracking without profit ratio",
          "Role-based access — admin, manager, employee, freelancer",
          "Fully responsive mobile layout with hamburger sidebar across all pages",
        ],
      },
    ],
    architecture:
      "FastAPI backend with domain-separated routers: projects, tasks, finance, invoices, employees, freelancers, clients, reports. Keycloak provides SSO with Google login and JWT-based group permissions. Next.js frontend uses typed REST contracts for all API interactions. PDF generation happens server-side with HTML templates. PostgreSQL stores all relational business data with auto-calculated fields and cascading relations.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
  },

  {
    slug: "delta-exchange-automation",
    name: "Delta Exchange Automation",
    tagline: "Multi-symbol automated crypto trading system on Delta Exchange with real-time WebSocket monitoring and Telegram alerts.",
    category: "Fintech · Trading Automation",
    status: "completed",
    stack: [
      "Python", "FastAPI", "WebSockets",
      "Delta Exchange API", "Telegram Bot API",
    ],
    description:
      "An automated trading system integrated with Delta Exchange that executes trades across multiple cryptocurrency instruments simultaneously — driven by strategy signals with real-time Telegram notifications and live market monitoring via WebSockets.",
    problem:
      "Manually trading crypto derivatives on Delta Exchange across multiple instruments requires constant attention, rapid decision-making, and is prone to missed signals and delayed execution.",
    solution:
      "A FastAPI backend subscribes to Delta Exchange WebSocket feeds for real-time price data, evaluates strategy signals, and executes orders automatically. A Telegram Bot delivers instant trade alerts and system status updates to the operator without interrupting the main trading loop.",
    highlights: [
      { label: "Exchange", value: "Delta Exchange" },
      { label: "Symbols", value: "Multi-instrument" },
      { label: "Alerts", value: "Telegram Bot" },
      { label: "Data", value: "WebSocket feed" },
    ],
    features: [
      {
        title: "Multi-Symbol Trading",
        items: [
          "Simultaneous trade execution across multiple instruments",
          "Independent strategy evaluation per symbol",
          "Concurrent position management without interference",
          "Configurable symbol list and strategy parameters",
        ],
      },
      {
        title: "Automated Execution",
        items: [
          "Signal-based order placement without manual intervention",
          "Delta Exchange REST API for order management",
          "Entry, exit, and stop-loss automation",
          "Real-time order status tracking and reconciliation",
        ],
      },
      {
        title: "WebSocket Monitoring",
        items: [
          "Live market data subscription via Delta Exchange WebSocket",
          "Real-time price and order book monitoring",
          "Signal processing on incoming tick data",
          "Low-latency async event loop for time-sensitive execution",
        ],
      },
      {
        title: "Telegram Integration",
        items: [
          "Instant trade execution alerts via Telegram Bot API",
          "System health and connectivity status notifications",
          "Daily P&L and position summary reports",
          "Error and exception alerts for operational awareness",
        ],
      },
    ],
    architecture:
      "FastAPI application with an async event loop subscribing to Delta Exchange WebSocket feeds. Strategy logic evaluates signals per symbol and triggers REST API calls for order execution. Telegram Bot API delivers notifications asynchronously without blocking the main trading loop.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
