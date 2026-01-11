# WellWorks Turkey - UX Standards & Guidelines

> A living reference document for consistent, user-centered design decisions.

---

## 🧠 10 Iterative UX Questions (Progressive Refinement)

### Q1: Who is the primary user and what do they want?

**Initial Answer:** Someone looking for health products or event services.

**Refined Answer:** There are actually **two distinct user archetypes**:
- **Health User:** Health-conscious consumers aged 25-45 who want quick, trustworthy information about supplements. They're skeptical of "wellness hype" and want clinical credibility.
- **MICE User:** Corporate event planners or festival-goers who want to see proof of capability (portfolio) and easy contact options.

**UX Implication:** The site MUST clearly separate these journeys immediately. No user should accidentally end up in the wrong section.

---

### Q2: What is the single most important action on each section?

**Initial Answer:** "Explore" and "Contact" buttons.

**Refined Answer:** 
- **Health:** The #1 goal is to drive users to **dailyshot.com.tr** to purchase products. Every design decision should reduce friction to that external checkout.
- **MICE:** The #1 goal is to generate **quote requests** via the contact form or WhatsApp. Showcasing past work builds trust to enable this.

**UX Implication:** CTAs must be verb-specific, not vague ("Keşfet" → "Satın Al" for Health, "Teklif Al" for MICE).

---

### Q3: Does the Gateway page explain "WellWorks Turkey"?

**Initial Answer:** Yes, it shows two brands clearly.

**Challenged Answer:** No, it shows Dailyshot and MICE Events, but a first-time visitor has no context about the parent company. Is WellWorks a distributor? A conglomerate? A holding company?

**Final Answer:** The Gateway needs a subtle but clear tagline explaining the relationship:
> "WellWorks Turkey | Sağlık & Deneyim Çözümleri"

**UX Implication:** Add a one-line descriptor below or near the logo that anchors brand identity before the split.

---

### Q4: Once inside a section, can users switch brands easily?

**Initial Answer:** Yes, there's a toggle in the header.

**Challenged Answer:** On mobile, the header is cramped. The toggle competes with logo, search, language, and menu icons. It's easy to miss.

**Deeper Issue:** Should users even want to switch? If someone is deep in Health products, are they really interested in events?

**Final Answer:** The toggle is useful but secondary. It should:
1. Be clearly visible but not prominent
2. On mobile, move inside the hamburger menu
3. Include visual feedback (slide animation) when switching

**UX Implication:** Simplify the mobile header. Prioritize: Logo → Menu (hamburger) → Nothing else visible. All other controls inside menu.

---

### Q5: Are product cards driving purchases or just displaying info?

**Initial Answer:** They show products nicely with images and prices.

**Challenged Answer:** "Keşfet" (Explore) is ambiguous. Does it go to a product detail page? An external store? Users don't know until they click.

**Deeper Issue:** If the actual purchase happens on dailyshot.com.tr, why show detailed product pages on wellworksturkey.com at all?

**Final Answer:** The WellWorks site should be a **showcase/gateway**, not a full e-commerce experience. Product cards should:
1. Show essential info (name, category, price, image)
2. Have a clear "Satın Al ↗" button that opens dailyshot.com.tr in new tab
3. Optionally, a secondary "Detaylar" link for curious users

**UX Implication:** Reduce friction - fewer clicks to purchase. Don't duplicate the e-commerce site's product pages.

---

### Q6: Is the visual hierarchy guiding users correctly?

**Initial Answer:** The hero sections are large and prominent.

**Challenged Answer:** On the Health page, after the hero, users see a horizontal product category slider, then product cards. But what if they just want to go directly to the shop?

**Deeper Issue:** The page structure assumes users want to browse. Some just want to buy.

**Final Answer:** Add a persistent "Go to Shop" CTA that's always visible:
- Desktop: Sticky in header or as a floating button
- Mobile: Bottom navigation bar with "Shop" as one option

**UX Implication:** Provide escape hatches for users who know what they want.

---

### Q7: Is the MICE section showing enough proof of capability?

**Initial Answer:** It has event cards with images.

**Challenged Answer:** The events use placeholder images (`/placeholder.svg`). This destroys credibility. Event organizers judge by visual portfolio.

**Deeper Issue:** The bento grid layout is trendy but are the metrics (12+ Years, 500K+ Attendees) verifiable? Social proof needs specificity.

**Final Answer:** 
1. Replace all placeholders with real event photography (high-resolution, professional)
2. Add specific client logos if possible (brands they've worked with)
3. Include video highlights if available
4. Make stats specific ("523,000 Attendees" is more credible than "500K+")

**UX Implication:** For B2B sections, quality of imagery is directly proportional to perceived professionalism.

---

### Q8: Is the contact experience frictionless?

**Initial Answer:** There's a contact form and WhatsApp button.

**Challenged Answer:** Multiple contact options can create choice paralysis. Also, the WhatsApp button can overlap content on mobile.

**Deeper Issue:** Different users prefer different channels. Health customers might prefer WhatsApp for quick questions. Corporate MICE clients might prefer formal email.

**Final Answer:** 
- **Health:** Prioritize WhatsApp for product inquiries (it's informal and fast)
- **MICE:** Prioritize email/form for quote requests (it's professional and documented)
- The WhatsApp button should be dismissible (show "X" to hide temporarily)
- Always show a direct email link for those who hate forms

**UX Implication:** Match contact channel to user expectation. Don't force one channel.

---

### Q9: Does the site respect users' time?

**Initial Answer:** It loads fast thanks to Vite.

**Challenged Answer:** Fast loading ≠ quick task completion. How many clicks to:
- Buy a product? (Currently: Gateway → Health → Products → Card → External site = 4 clicks)
- Request an event quote? (Gateway → MICE → Contact = 3 clicks)

**Deeper Issue:** The Gateway adds one extra click to every journey. Is it worth it?

**Final Answer:** 
- The Gateway is valuable for brand positioning but should be skippable
- Consider adding "quick action" buttons on Gateway: "Shop Health Products ↗" and "Request Event Quote"
- Use URL parameters to remember brand preference (so returning users skip Gateway)

**UX Implication:** Every click should add value. If it doesn't, remove it.

---

### Q10: Is the design accessible and inclusive?

**Initial Answer:** It uses readable fonts and good contrast (mostly).

**Challenged Answer:** 
- MICE section: White text over busy event photos may fail WCAG contrast
- No visible focus indicators for keyboard navigation
- WhatsApp button has no accessible label alternative
- Language toggle is tiny

**Deeper Issue:** Accessibility isn't just compliance; it's good UX for everyone (aging users, bright sunlight conditions, etc.)

**Final Answer:**
1. Add semi-transparent overlays on hero images to ensure text contrast
2. Implement visible focus states (`:focus-visible` outlines)
3. Ensure all interactive elements have proper `aria-labels`
4. Increase touch target sizes for mobile (minimum 44x44px)
5. Test with keyboard navigation only

**UX Implication:** Build accessibility into the design system, not as an afterthought.

---

## 🎨 Core UX Principles for WellWorks Turkey

### 1. Clarity Over Cleverness
- Use plain Turkish. Avoid jargon.
- CTAs must be action verbs: "Satın Al", "Teklif İste", "İletişime Geç"
- Icons should have text labels (icon-only buttons confuse users)

### 2. One Primary Action Per Page
- Every page should have ONE clear goal
- Secondary actions should be visually subordinate
- If you can't name the primary action, the page is unfocused

### 3. Trust Before Transaction
- Show social proof early (reviews, client logos, stats)
- Use real imagery, never stock photos or placeholders
- Display security badges and policies visibly

### 4. Mobile-First, Always
- 70%+ of Turkish users browse on mobile
- Design for thumb reach (bottom navigation for primary actions)
- Simplify header: Logo + Hamburger + Nothing else

### 5. Reduce, Don't Add
- Before adding a feature, ask: "Does this help the user achieve their goal?"
- Every element on screen should earn its place
- White space is not wasted space

---

## 📋 Specific Improvement Recommendations

### High Priority (Do First)

| Issue | Current State | Recommendation |
|-------|---------------|----------------|
| Vague CTAs | "Keşfet" everywhere | Use specific verbs: "Satın Al", "Ürünleri Gör", "Teklif Al" |
| No parent brand context | Gateway shows only sub-brands | Add tagline: "WellWorks Turkey \| Sağlık & Deneyim" |
| Mobile header cluttered | Too many icons visible | Move toggle, search, language into hamburger menu |
| Placeholder images | Events use placeholder.svg | Add real event photography |
| WhatsApp blocks content | Fixed bottom-right overlaps | Add dismiss option or move to left side |

### Medium Priority (Do Next)

| Issue | Current State | Recommendation |
|-------|---------------|----------------|
| Product page duplication | Full product pages exist | Simplify to cards + direct shop link |
| No quick shop access | Users must browse to find shop | Add sticky "Shop Now" button on Health pages |
| Event detail pages missing | Events are just cards | Add modal or lightbox with gallery |
| i18n incomplete | Some footer text not translated | Audit and complete EN translations |
| Contact form only | No email click-to-copy | Add "info@wellworksturkey.com" as clickable link |

### Lower Priority (Polish)

| Issue | Current State | Recommendation |
|-------|---------------|----------------|
| No loading states | Images pop in suddenly | Add skeleton/blur placeholders |
| Page transitions | Instant page changes | Add subtle fade/slide transitions |
| No remember preference | Always starts at Gateway | Use localStorage to skip Gateway for return visitors |
| Stats not specific | "500K+" events | Use specific numbers if available |
| No keyboard focus | Invisible focus states | Add `:focus-visible` styles |

---

## 🔧 Header Simplification (Mobile)

### Current State
```
[Logo] [Anasayfa] [Ürünler] [Hakkında] [🔍] [Health|MICE] [TR|EN] [☰]
```

### Recommended State
```
[Logo]                                                      [☰]
```

Inside hamburger menu:
- Anasayfa
- Ürünler
- Hakkında
- [Divider]
- Health / MICE Toggle
- TR / EN Toggle
- 🔍 Ara

---

## 📱 Mobile Bottom Navigation (Optional Enhancement)

For high-traffic mobile users, consider a fixed bottom nav:

```
┌─────────────────────────────────────────┐
│   🏠        📦        📞        ↗️      │
│   Ana    Ürünler   İletişim   Mağaza   │
└─────────────────────────────────────────┘
```

This keeps primary actions always accessible without scrolling.

---

## ✅ UX Checklist Before Launch

- [ ] All CTAs use specific action verbs
- [ ] No placeholder images remain
- [ ] Mobile header has ≤ 2 visible elements
- [ ] WhatsApp button doesn't overlap content
- [ ] All pages have one clear primary action
- [ ] External links marked with ↗ or open in new tab with warning
- [ ] WCAG 2.1 AA contrast verified on all text
- [ ] All images have meaningful alt text
- [ ] Form fields have proper labels and error states
- [ ] Site works with keyboard navigation only
- [ ] EN translations 100% complete

---

*Document Version: 1.0*
*Last Updated: January 11, 2026*
*Author: UX Analysis Agent*
