# Spring Boot & Spring Initializr Lab Programs (`Lab-programs`) — Programs 1 to 7

> Academic Java / Spring Boot coursework guide (`index.html`, `initializr.html`) paired with downloadable ZIP archives (`Programs/program1.zip` through `Programs/progrm7.zip`) and Spring Initializr setup diagrams.

[![HTML5](https://img.shields.io/badge/HTML5-Static%20Site-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Lab%20Archive-6DB33F.svg)](https://spring.io/projects/spring-boot)

---

## Executive Overview

**`Lab-programs`** hosts a static web study guide explaining Spring Web and Spring Initializr concepts (`index.html`, `initializr.html`, `Spring.jpg`, `Spring initiazer.png`) alongside 7 compressed Spring Boot lab project archives under `Programs/`.

> **Quality & CI Status (`main` vs. Open Draft PR #2 — `maintenance/repository-quality-improvements`):**
> - **PR #2** cleans `.gitignore`, validates HTML/links/scripts via `tests/verify_site.mjs`, and adds `.github/workflows/quality.yml` (verified passing in CI).

---

## Included Archives (`Programs/`)

- `Programs/program1.zip`
- `Programs/program2.zip`
- `Programs/program3.zip`
- `Programs/progrm4.zip` *(archive filename in repo retains original spelling)*
- `Programs/progrm5.zip`
- `Programs/progrm6.zip`
- `Programs/progrm7.zip`

---

## Usage & Verification

```bash
git clone https://github.com/StratagemVX/Lab-programs.git
cd Lab-programs

# View the guide in a local browser
python -m http.server 8000

# Verify HTML & archive links (PR #2)
node tests/verify_site.mjs
```

---

## Contributor Attribution

- **Curator:** Chethan Kumar B S (`StratagemVX`) — *Archived duplicates `Lab-Project`, `lab-project19`, and `springbooterror` point here as canonical*
- **GitHub:** [https://github.com/StratagemVX](https://github.com/StratagemVX)
- **Portfolio:** [https://chethan-kumar-portfolio.vercel.app/](https://chethan-kumar-portfolio.vercel.app/)
