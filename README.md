# NayanamNtyam - Content Management Guide

This guide explains how to add your own images and dance content to the website.

## 📂 PROJECT STRUCTURE

You must create the `public` folder manually at the root of your project. Your folder structure should look like this:

```text
My-Project/
├── index.html          (Main HTML file)
├── package.json        (Dependencies)
├── vite.config.ts      (Build config)
├── src/                (Source code)
│   ├── App.tsx
│   └── ...
└── public/             <-- CREATE THIS FOLDER MANUALLY
    └── images/         <-- Create this inside 'public'
        ├── general/    <-- Place 'banner.png' here
        ├── samutha/    <-- Place Pataka, Tripataka, etc. here
        ├── asamutha/   <-- Place Anjali, Kapota, etc. here
        ├── navarasas/  <-- Place Shringara, Hasya, etc. here
        ├── head/       <-- Place Sama, Udvahita, etc. here
        ├── neck/       <-- Place Sundari, etc. here
        ├── eye/        <-- Place Alokita, etc. here
        └── eyebrow/    <-- Place Sahaja, etc. here
```

## 1. Adding Images

This project uses the `public/` folder for static assets.

1.  Navigate to your project folder.
2.  Look for the `public` folder.
3.  Inside `public`, create a new folder named `images` (optional, but keeps things tidy).
4.  Paste your image files (JPG, PNG, WEBP) here.
    *   Example: `public/images/pataka-hand.jpg`

## 2. MAIN SITE BANNER

**Action:** Create folder `public/images/general/` and save the red silk background image here:

- [ ] `banner.png`

## 3. SAMUTHA HASTA (Single) IMAGES CHECKLIST

**Action:** Create folder `public/images/samutha/` and save your images with these EXACT names:

- [ ] `pataka.png`
- [ ] `tripataka.png`
- [ ] `ardhapataka.png`
- [ ] `kartarimukha.png`
- [ ] `mayura.png`
- [ ] `ardhachandra.png`
- [ ] `arala.png`
- [ ] `shukatunda.png`
- [ ] `mushti.png`
- [ ] `shikhara.png`
- [ ] `kapittha.png`
- [ ] `katakamukha.png`
- [ ] `suchi.png`
- [ ] `chandrakala.png`
- [ ] `padmakosha.png`
- [ ] `sarpashirsha.png`
- [ ] `mrigashirsha.png`
- [ ] `simhamukha.png`
- [ ] `kangula.png`
- [ ] `alapadma.png`
- [ ] `chatura.png`
- [ ] `bhramara.png`
- [ ] `hamsasya.png`
- [ ] `hamsapaksha.png`
- [ ] `samdamsha.png`
- [ ] `mukula.png`
- [ ] `tamrachuda.png`
- [ ] `trishula.png`

## 4. ASAMUTHA HASTA (Combined) IMAGES CHECKLIST

**Action:** Create folder `public/images/asamutha/` and save your images with these EXACT names:

- [ ] `anjali.png`
- [ ] `kapota.png`
- [ ] `karkata.png`
- [ ] `swastika.png`
- [ ] `dola.png`
- [ ] `pushpaputa.png`
- [ ] `utsanga.png`
- [ ] `shivalinga.png`
- [ ] `katakavardhana.png`
- [ ] `kartariswastika.png`
- [ ] `shakata.png`
- [ ] `shankha.png`
- [ ] `chakra.png`
- [ ] `samputa.png`
- [ ] `pasha.png`
- [ ] `kilaka.png`
- [ ] `matsya.png`
- [ ] `kurma.png`
- [ ] `varaha.png`
- [ ] `garuda.png`
- [ ] `nagabandha.png`
- [ ] `khatva.png`
- [ ] `bherunda.png`
- [ ] `avahittha.png`

## 5. NAVARASAS (Emotions) IMAGES CHECKLIST

**Action:** Create folder `public/images/navarasas/` and save your images with these EXACT names:

- [ ] `shringara.png`
- [ ] `hasya.png`
- [ ] `karuna.png`
- [ ] `raudra.png`
- [ ] `veera.png`
- [ ] `bhayanaka.png`
- [ ] `bibhatsa.png`
- [ ] `adbhuta.png`
- [ ] `shanta.png`

## 6. SHIRO BHEDAS (Head) IMAGES CHECKLIST

**Action:** Create folder `public/images/head/` and save your images with these EXACT names:

- [ ] `sama.png`
- [ ] `udvahita.png`
- [ ] `adhomukha.png`
- [ ] `alolita.png`
- [ ] `dhuta.png`
- [ ] `kampita.png`
- [ ] `paravritta.png`
- [ ] `utkshipta.png`
- [ ] `parivahitta.png`

## 7. GREEVA BHEDAS (Neck) IMAGES CHECKLIST

**Action:** Create folder `public/images/neck/` and save your images with these EXACT names:

- [ ] `sundari.png`
- [ ] `tiraschina.png`
- [ ] `parivartita.png`
- [ ] `prakampita.png`

## 8. DRISHTI BHEDAS (Eye) IMAGES CHECKLIST

**Action:** Create folder `public/images/eye/` and save your images with these EXACT names:

- [ ] `sama.png`
- [ ] `alokita.png`
- [ ] `sachi.png`
- [ ] `pralokita.png`
- [ ] `nimilita.png`
- [ ] `ullokita.png`
- [ ] `anuvritta.png`
- [ ] `avalokita.png`

## 9. BHRU BHEDAS (Eyebrow) IMAGES CHECKLIST

**Action:** Create folder `public/images/eyebrow/` and save your images with these EXACT names:

- [ ] `sahaja.png`
- [ ] `patita.png`
- [ ] `utkshipta.png`
- [ ] `chatura.png`
- [ ] `rechita.png`
- [ ] `kunchita.png`

## 10. Adding/Editing Dance Items

All content is stored in `services/content.ts`.

1.  Open `services/content.ts` in VS Code.
2.  Scroll down to the `SAMPLE_ITEMS` array.
3.  To add a new item, copy an existing block (from `{` to `},`) and paste it into the list.
4.  Update the fields:

```typescript
{
  id: 'unique-id-here',           // Must be unique (e.g. 'shikhara')
  categoryId: CategoryId.SAMUTHA, // Which category does it belong to?
  name: 'Shikhara',               // English Name
  sanskritName: 'शिखर',           // Sanskrit Name (Optional)
  
  // LINKING YOUR IMAGE:
  // Use a leading slash relative to the public folder
  imageUrl: '/images/shikhara-hand.jpg', 
  
  description: 'Thumb raised...', // Description text
  
  // YOUTUBE VIDEO:
  // Only use the ID, not the full URL.
  // URL: youtube.com/watch?v=dQw4w9WgXcQ  -> ID is dQw4w9WgXcQ
  youtubeId: 'dQw4w9WgXcQ',
  
  relatedIds: ['pataka']          // IDs of other items to show at bottom of page
},
```

## 11. Changing Category Banners

The code is now set up to use a single banner image for all categories.
To change it, replace the file at:
`/public/images/general/banner.png`