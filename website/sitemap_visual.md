# 🗺️ Sitemap — K Service Trading (Visual)

```mermaid
flowchart TD
    NAV["🧭 HEADER NAV\nK · SERVICE · TRADING · K-DELTAFARM · K-ECOTOURISM · Contact"]

    NAV --> HOME["🏠 Homepage (One-Page Flow)"]
    
    subgraph PAGES["📄 Dedicated Pages"]
        direction TB
        K_PAGE["👤 K (About)\n/about"]
        SV_PAGE["🔵 SERVICE\n/services"]
        TD_PAGE["📦 TRADING\n/trading"]
        DF_PAGE["🌿 K-DELTAFARM\n/k-deltafarm/an-nam"]
        EC_PAGE["🌐 K-ECOTOURISM\n/k-ecotourism"]
    end

    HOME --> K_SEC["K Section"]
    HOME --> SV_SEC["SERVICE Section"]
    HOME --> TD_SEC["TRADING Section"]
    HOME --> DF_SEC["K-DELTAFARM Section"]
    HOME --> EC_SEC["K-ECOTOURISM Section"]
    HOME --> CT_SEC["Contact Section"]

    K_SEC -.-> K_PAGE
    SV_SEC -.-> SV_PAGE
    TD_SEC -.-> TD_PAGE
    DF_SEC -.-> DF_PAGE
    EC_SEC -.-> EC_PAGE

    subgraph K_DETAIL["👤 K (About)"]
        K_PAGE --> K1["Giới thiệu K"]
        K_PAGE --> K2["7 Lĩnh vực lõi"]
        K_PAGE --> K3["Đối tác lý tưởng (Slice 11)"]
    end

    subgraph SV_DETAIL["🔵 SERVICE"]
        SV_PAGE --> SV1["K-Counsel"]
        SV_PAGE --> SV2["K-Investment"]
        SV_PAGE --> SV3["K-Smartfarm"]
        SV_PAGE --> SV4["K-7 Entertainment"]
    end

    subgraph TD_DETAIL["📦 TRADING"]
        TD_PAGE --> TD1["FMCG"]
        TD_PAGE --> TD2["AGRI (Nông sản)"]
        TD_PAGE --> TD3["THUỶ HẢI SẢN"]
        TD_PAGE --> TD4["NĂNG LƯỢNG"]
    end

    subgraph EC_DETAIL["🌐 K-ECOTOURISM"]
        EC_PAGE --> EC1["ECO-TOURISM (VN/Intl)"]
        EC_PAGE --> EC2["WELLNESS"]
        EC_PAGE --> EC3["DUTY FREE"]
    end

    style HOME fill:#0a0f0d,stroke:#D1B05A,color:#fff
    style PAGES fill:#1a1100,stroke:#D1B05A,color:#fff
    style K_DETAIL fill:#0f1a0f,stroke:#4CAF50,color:#fff
    style SV_DETAIL fill:#0d1a14,stroke:#4CAF50,color:#fff
    style TD_DETAIL fill:#0d1a2a,stroke:#2196F3,color:#fff
    style EC_DETAIL fill:#1a1100,stroke:#D1B05A,color:#fff
    style NAV fill:#0a0f0d,stroke:#D1B05A,color:#D1B05A
```

---

## 📋 Navigation Map & URLs

| Menu Item | URL | Key Content |
|-----------|-----|-------------|
| **K** | `/about` | Intro, 7 Core Sectors, Investor Partner (Slice 11) |
| **SERVICE** | `/services` | Counsel, Investment, Smartfarm, Entertainment |
| **TRADING** | `/trading` | FMCG, Agri, Seafood, Energy |
| **K-DELTAFARM** | `/k-deltafarm/an-nam` | Project AN NAM (Ecofarm & Wellness) |
| **K-ECOTOURISM**| `/k-ecotourism` | Eco-Tourism (VN/Intl), Wellness, Duty Free |
| **Contact** | `#contact` | Lead Form, Office Info |

---

## 🔗 Interaction Flow
1.  **Homepage** serves as the primary landing hub, summarizing all sectors.
2.  **Dedicated Pages** provide deep-dives into each business unit with specific call-to-actions.
3.  **Cross-linking**: "Trading" and "Service" sections on the homepage link to their respective dedicated pages.
4.  **Conversion**: All pages funnel users toward the **Contact** section/form.
