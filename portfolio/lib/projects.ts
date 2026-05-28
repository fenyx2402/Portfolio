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
    tagline: "A full-stack lab management platform with WhatsApp notifications, Keycloak auth, and real-time patient tracking.",
    category: "Enterprise Platform",
    status: "live",
    liveUrl: "https://lab.fenyxn.in",
    githubUrl: "https://github.com/Fenyxn/Laboratory-Management-System",
    stack: [
      "Python", "FastAPI", "Next.js", "TypeScript",
      "PostgreSQL", "Keycloak", "WhatsApp API",
      "Docker", "Nginx", "AWS", "CI/CD",
    ],
    description:
      "A production-deployed laboratory management system built for clinical labs to manage patients, tests, billing, and reports — with WhatsApp-based notification delivery and role-based access control via Keycloak.",
    problem:
      "Clinical labs struggle with manual test tracking, paper-based patient records, and no automated communication with patients — leading to delays, errors, and poor patient experience.",
    solution:
      "A unified platform with a FastAPI backend, Next.js frontend, and a dedicated WhatsApp microservice. Admins manage labs, patients, and test results from a dashboard. Patients receive automated WhatsApp notifications for appointments, reports, and billing.",
    highlights: [
      { label: "Deployment", value: "Live on GCP" },
      { label: "Auth", value: "Keycloak RBAC" },
      { label: "Notifications", value: "WhatsApp API" },
      { label: "Database", value: "PostgreSQL" },
    ],
    features: [
      {
        title: "Patient Management",
        items: [
          "Register and manage patient records",
          "Track test orders and sample collection",
          "Generate and store lab reports",
          "Billing and invoice management",
        ],
      },
      {
        title: "Lab Administration",
        items: [
          "Multi-lab support with owner-based access",
          "Keycloak group-based role management",
          "Admin dashboard for system-wide control",
          "Lab-level configuration and branding",
        ],
      },
      {
        title: "WhatsApp Notifications",
        items: [
          "Automated patient notifications via WhatsApp",
          "Report ready and appointment reminders",
          "Dedicated WhatsApp microservice (Node.js)",
          "Real-time delivery status tracking",
        ],
      },
      {
        title: "Infrastructure",
        items: [
          "Fully Dockerized — frontend, backend, DB, Keycloak, WhatsApp",
          "GitHub Actions CI/CD pipeline for automated deploys",
          "Nginx reverse proxy with SSL via Certbot",
          "Deployed on Google Cloud Platform (GCP)",
        ],
      },
    ],
    architecture:
      "Microservices architecture: FastAPI backend handles REST APIs with JWT verification from Keycloak. Next.js frontend communicates via proxy layer. A separate Node.js WhatsApp service handles all notification delivery. PostgreSQL stores all relational data. All services orchestrated via Docker Compose on GCP.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4",
  },
  {
    slug: "trendedge",
    name: "TrendEdge",
    tagline: "Real-time trading and automation platform with Supertrend signals and automated options execution.",
    category: "Fintech · Trading Platform",
    status: "completed",
    stack: [
      "Python", "FastAPI", "Next.js", "TypeScript",
      "Socket.IO", "Zerodha API", "PostgreSQL", "StockStats",
    ],
    description:
      "A real-time trading and analytics platform that processes live market data, calculates technical indicators, and automates trade execution on Zerodha — built for speed with sub-second data delivery and robust signal generation.",
    problem:
      "Manual trading on Zerodha requires constant screen monitoring, slow reaction times, and error-prone order placement — especially for options strategies that depend on rapid Supertrend signal reversals.",
    solution:
      "A FastAPI backend handles Zerodha authentication, pulls live market data at 2+ API requests per second, calculates Supertrend and ATR indicators, and triggers automated options orders. A Next.js frontend shows real-time dashboards via Socket.IO streaming.",
    highlights: [
      { label: "Data rate", value: "2+ req/sec" },
      { label: "Indicators", value: "Supertrend · ATR" },
      { label: "Streaming", value: "Socket.IO" },
      { label: "Broker", value: "Zerodha API" },
    ],
    features: [
      {
        title: "Market Data & Authentication",
        items: [
          "Secure Zerodha OAuth flow with token persistence in PostgreSQL",
          "Historical data fetching at 2+ requests/sec with rate limit management",
          "Live price streaming with sub-second latency via Socket.IO",
          "Token reuse to eliminate redundant API calls",
        ],
      },
      {
        title: "Signal Generation",
        items: [
          "Supertrend indicator calculated using StockStats library",
          "ATR (Average True Range) based volatility measurement",
          "Automated signal detection for Buy/Sell reversals",
          "Multi-symbol simultaneous monitoring",
        ],
      },
      {
        title: "Automated Execution",
        items: [
          "Automatic strike price selection based on investment amount",
          "Options buying, selling, and equity trade execution",
          "Strategy-based order placement triggered by signal reversals",
          "Real-time position and P&L tracking",
        ],
      },
      {
        title: "Frontend Dashboards",
        items: [
          "Live trading dashboard with real-time data updates",
          "Strategy configuration pages with typed Next.js models",
          "Market monitoring panels with indicator visualization",
          "Trade history and performance analytics",
        ],
      },
    ],
    architecture:
      "FastAPI backend manages Zerodha API integration, rate limiting, and indicator computation. Socket.IO bridges backend events to the Next.js frontend in real time. PostgreSQL stores tokens, trade history, and strategy configs. All components communicate via typed REST + WebSocket contracts.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
  },
  {
    slug: "spacetime",
    name: "SpaceTime",
    tagline: "Microservices-based market data platform processing 10,000+ ticks/sec from DTN live feed.",
    category: "Fintech · Market Data",
    status: "completed",
    stack: [
      "Python", "FastAPI", "Next.js", "TypeScript",
      "Redis", "PostgreSQL", "InfluxDB", "Socket.IO",
      "TradingView Lightweight Charts", "Microservices", "AWS",
    ],
    description:
      "A high-throughput market data platform built on a microservices architecture that ingests, processes, and distributes 10,000+ market ticks per second from DTN live data feed — with multi-chart real-time visualization and event-driven frontend state management.",
    problem:
      "Processing 10,000+ ticks/sec from a live market feed while simultaneously distributing real-time data to multiple connected frontend clients and chart instances — without performance degradation or data loss.",
    solution:
      "A Redis Pub/Sub pipeline decouples data ingestion from distribution. InfluxDB stores time-series tick data with high write throughput. PostgreSQL manages relational data. Socket.IO streams data to the Next.js frontend which uses an event bus pattern to update multiple TradingView chart instances independently.",
    highlights: [
      { label: "Throughput", value: "10,000+ ticks/sec" },
      { label: "Storage", value: "InfluxDB + PostgreSQL" },
      { label: "Messaging", value: "Redis Pub/Sub" },
      { label: "Charts", value: "TradingView" },
    ],
    features: [
      {
        title: "Data Ingestion Pipeline",
        items: [
          "DTN live market data feed integration",
          "10,000+ ticks per second ingestion and processing",
          "Direct PostgreSQL write path for tick storage",
          "InfluxDB for high-performance time-series queries",
        ],
      },
      {
        title: "Microservices Architecture",
        items: [
          "Redis Pub/Sub for inter-service message distribution",
          "Independent ingestion, processing, and API services",
          "Horizontal scaling per service without full system restart",
          "Minimal latency across service boundaries",
        ],
      },
      {
        title: "Real-Time Frontend",
        items: [
          "Socket.IO-based streaming from backend to multiple clients",
          "Event bus pattern for decoupled chart state management",
          "TradingView Lightweight Charts: line, candlestick, signal markers",
          "Incremental data updates to avoid full re-renders",
        ],
      },
      {
        title: "Infrastructure",
        items: [
          "AWS server provisioning and management",
          "CI/CD pipeline for zero-downtime deployments",
          "Nginx reverse proxy and SSL certificate management",
          "Full SSH-based production deployment workflow",
        ],
      },
    ],
    architecture:
      "DTN feed → Ingestion service → Redis Pub/Sub → Distribution service → Socket.IO → Next.js (event bus → TradingView charts). PostgreSQL stores relational app data. InfluxDB stores time-series tick data for historical queries. All services containerized and deployed on AWS.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
  },
  {
    slug: "company-management-system",
    name: "Company Management System",
    tagline: "Enterprise full-stack platform with project management, finance, invoicing, and Keycloak RBAC.",
    category: "Enterprise Platform",
    status: "completed",
    stack: [
      "Python", "FastAPI", "Next.js", "TypeScript",
      "PostgreSQL", "Keycloak", "JWT", "FullCalendar", "REST API",
    ],
    description:
      "A comprehensive enterprise company management platform with modules for project tracking, financial management, invoice generation, expense reporting, and calendar-based scheduling — secured with Keycloak role-based access control.",
    problem:
      "Enterprise companies lack a unified system to manage projects, finances, invoices, and team schedules — relying on disconnected spreadsheets and tools that don't communicate with each other.",
    solution:
      "A monolithic FastAPI backend with clean module separation serves a type-safe Next.js frontend. Keycloak handles multi-role authentication with group-based permissions. FullCalendar integrates scheduling directly into project workflows.",
    highlights: [
      { label: "Auth", value: "Keycloak RBAC" },
      { label: "Modules", value: "5 core modules" },
      { label: "Calendar", value: "FullCalendar" },
      { label: "API", value: "RESTful FastAPI" },
    ],
    features: [
      {
        title: "Project Management",
        items: [
          "Project creation, assignment, and milestone tracking",
          "Task management with status workflows",
          "FullCalendar integration for project event scheduling",
          "Team member assignment with role-based visibility",
        ],
      },
      {
        title: "Finance & Billing",
        items: [
          "Invoice creation and PDF generation",
          "Expense tracking and categorization",
          "Financial reporting and summary dashboards",
          "Client billing history and payment status",
        ],
      },
      {
        title: "Authentication & Access",
        items: [
          "Keycloak SSO with JWT token-based access",
          "Role-based access control via Keycloak groups",
          "Multi-role support: admin, manager, employee, client",
          "Secure API endpoints with token verification middleware",
        ],
      },
      {
        title: "Frontend Architecture",
        items: [
          "Type-safe Next.js integration with FastAPI via REST",
          "Typed data models for all API request/response contracts",
          "Modular page architecture for each business domain",
          "Responsive design across all company management modules",
        ],
      },
    ],
    architecture:
      "FastAPI backend with domain-separated routers (projects, finance, invoices, expenses). Keycloak runs as a separate service providing JWT tokens. Next.js frontend consumes REST APIs with fully typed contracts. PostgreSQL stores all relational business data.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
  },
  {
    slug: "delta-exchange-automation",
    name: "Delta Exchange Automation",
    tagline: "Multi-symbol automated trading system on Delta Exchange with Telegram alerts and real-time monitoring.",
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
      "A FastAPI backend subscribes to Delta Exchange WebSocket feeds for real-time price data, evaluates strategy signals, and executes orders automatically. A Telegram Bot delivers instant trade alerts and system status updates to the operator.",
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
          "Low-latency event loop for time-sensitive execution",
        ],
      },
      {
        title: "Telegram Integration",
        items: [
          "Instant trade execution alerts via Telegram Bot",
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
