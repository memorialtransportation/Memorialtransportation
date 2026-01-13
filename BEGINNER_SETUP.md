# 🚀 Complete Step-by-Step Setup Guide (For Non-Technical Users)

This guide will walk you through everything you need to download and install to run your website locally. No IT experience needed!

---

## 📋 STEP 1: What You Need to Download (3 Things)

You need to download and install **3 programs** on your computer:

### 1️⃣ **Node.js** (The Engine)
This is what runs your website on your computer.

**Download:**
1. Go to: https://nodejs.org/
2. Click the big green button that says **"LTS"** (Long Term Support)
3. Download the version for your computer (Windows, Mac, or Linux)
4. Run the installer and click "Next" until it's done
5. Restart your computer

**Verify it worked:**
- Open Command Prompt (Windows) or Terminal (Mac)
- Type: `node --version`
- You should see a version number like `v20.10.0`

---

### 2️⃣ **VS Code** (The Code Editor)
This is where you'll edit your website code.

**Download:**
1. Go to: https://code.visualstudio.com/
2. Click the big blue download button
3. Run the installer and click "Next" until it's done
4. Open VS Code when done

---

### 3️⃣ **Git** (Optional but Recommended)
This helps you manage your code versions.

**Download:**
1. Go to: https://git-scm.com/
2. Click "Download for Windows" (or your operating system)
3. Run the installer and click "Next" until it's done

---

## 📥 STEP 2: Download Your Website Code

You have **2 options** to get your website code:

### **Option A: Download from Management UI (Easiest)**

1. Go to the Management UI of your Manus project
2. Click the **"Code"** panel on the right side
3. Click **"Download all files"** button
4. A ZIP file will download to your Downloads folder
5. Right-click the ZIP file and select **"Extract All"**
6. Choose a location (like Desktop or Documents) and click "Extract"
7. You now have a folder called `transport-company-site` with all your code

### **Option B: Use GitHub (If you exported to GitHub)**

1. Go to your GitHub repository
2. Click the green **"Code"** button
3. Click **"Download ZIP"**
4. Extract the ZIP file to your computer

---

## 💻 STEP 3: Open the Project in VS Code

1. Open **VS Code**
2. Click **File → Open Folder**
3. Navigate to your `transport-company-site` folder
4. Click **"Select Folder"**
5. You should see all your project files on the left side

---

## ⚙️ STEP 4: Install All Dependencies

Dependencies are like tools your website needs to run.

1. In VS Code, open the **Terminal**
   - Click **View → Terminal** (or press Ctrl + `)
   
2. You should see a command prompt at the bottom

3. Copy and paste this command:
```bash
npm install
```

4. Press **Enter** and wait (this takes 2-5 minutes)

5. When it's done, you'll see: `added XXX packages`

---

## 🗄️ STEP 5: Set Up the Database (Choose One)

Your website needs a database to store information. Pick the easiest option:

### **Option A: SQLite (EASIEST - No Installation Needed)**

1. In VS Code, create a new file called `.env.local`
   - Right-click in the file explorer on the left
   - Click "New File"
   - Name it: `.env.local`

2. Copy and paste this into the file:
```
DATABASE_URL=file:./dev.db
VITE_APP_ID=local-dev
JWT_SECRET=your-secret-key-12345
OWNER_NAME=Your Name
OWNER_OPEN_ID=local-user-123
VITE_APP_TITLE=Memorial Transportation
VITE_APP_LOGO=/logo-memorial.png
```

3. Save the file (Ctrl + S)

4. In the terminal, run:
```bash
npm run db:push
```

5. Wait for it to complete (you'll see checkmarks ✓)

---

### **Option B: MySQL (More Advanced)**

If you want to use MySQL (requires extra setup):

1. Download MySQL from: https://www.mysql.com/downloads/
2. Install it on your computer
3. Create a database called `transport_db`
4. Update `.env.local` with your MySQL connection details
5. Run: `npm run db:push`

**For beginners: Use Option A (SQLite) - it's much easier!**

---

## 🚀 STEP 6: Start Your Website

1. In the VS Code terminal, run:
```bash
npm run dev
```

2. Wait for the message:
```
Server running on http://localhost:3000/
```

3. Open your browser and go to: **http://localhost:3000**

4. Your website should appear! 🎉

---

## ✏️ STEP 7: Make Changes to Your Website

Now you can edit your website code!

### **Change Company Name:**
1. In VS Code, open: `company-config.ts`
2. Find: `name: "Memorial Transportation"`
3. Change it to your company name
4. Save (Ctrl + S)
5. Your browser will automatically refresh - you'll see the change!

### **Change Colors:**
1. Open: `client/src/index.css`
2. Find: `--primary: #EF4444;` (this is the red color)
3. Change the color code to any color you want
4. Save and see the change in your browser

### **Change Text on Pages:**
1. Open files in `client/src/pages/`
2. Find the text you want to change
3. Edit it and save
4. Your browser updates automatically!

### **Add New Images:**
1. Put your image files in: `client/public/`
2. Reference them in your code like: `/your-image.jpg`

---

## 🛑 STEP 8: Stop Your Website

When you're done working:
1. In the terminal, press **Ctrl + C**
2. The website will stop running

To start it again, run: `npm run dev`

---

## 🔧 Useful Commands

Here are commands you might need:

```bash
# Start your website
npm run dev

# Stop your website
Ctrl + C

# Install dependencies
npm install

# Update database
npm run db:push

# Format your code
npm run format

# Check for errors
npm run check
```

---

## 🐛 Common Problems & Solutions

### **Problem: "npm: command not found"**
- **Solution:** Node.js didn't install correctly. Restart your computer and try again.

### **Problem: Port 3000 already in use**
- **Solution:** Another program is using port 3000. Run this instead:
```bash
PORT=3001 npm run dev
```
Then go to: http://localhost:3001

### **Problem: Database error**
- **Solution:** Delete the `.env.local` file and create a new one with the correct settings

### **Problem: Changes not showing in browser**
- **Solution:** 
  1. Press Ctrl + C to stop the server
  2. Run `npm run dev` again
  3. Refresh your browser (Ctrl + R)

### **Problem: "npm install" is taking too long**
- **Solution:** This is normal! It can take 5-10 minutes. Don't close the terminal.

---

## 📁 Important Files to Know

Here are the main files you'll edit:

| File | What it does |
|------|-------------|
| `company-config.ts` | Your company information |
| `client/src/index.css` | Colors and design |
| `client/src/pages/Home.tsx` | Homepage content |
| `client/src/pages/About.tsx` | About page content |
| `client/src/pages/Services.tsx` | Services page content |
| `client/src/pages/Contact.tsx` | Contact page content |
| `.env.local` | Settings and secrets |

---

## 🎨 Customization Examples

### Change the Red Color to Blue
1. Open `client/src/index.css`
2. Find: `--primary: #EF4444;`
3. Change to: `--primary: #3B82F6;`
4. Save and see your website turn blue!

### Change Company Name Everywhere
1. Open `company-config.ts`
2. Change `name: "Memorial Transportation"` to your name
3. Save - it updates everywhere automatically!

### Add a New Page
1. Create a new file in `client/src/pages/` called `YourPage.tsx`
2. Copy content from another page as a template
3. Edit the content
4. Add a route in `client/src/App.tsx`
5. Add a link in `client/src/components/Navigation.tsx`

---

## 📱 Test Your Website

Before hosting, test everything:

1. ✅ Homepage loads
2. ✅ All navigation links work
3. ✅ Contact form works
4. ✅ Quote form works
5. ✅ Login/Logout works
6. ✅ Mobile view looks good (resize your browser window)

---

## 🌐 Next: Getting a Domain and Hosting

Once you're happy with your website locally, you'll need:

1. **Domain Name** (like www.yourdomain.com)
   - Buy from: GoDaddy, Namecheap, or Google Domains
   - Cost: ~$10-15/year

2. **Web Hosting** (to put your website online)
   - Options: Vercel, Netlify, Railway, Heroku, or AWS
   - Cost: Free to $50+/month depending on traffic

3. **Connect them together**
   - Point your domain to your hosting
   - Deploy your code to hosting

---

## 📞 When You're Ready to Host

Once you have a domain and hosting, come back and I'll help you:
1. Build your website for production
2. Deploy it to your hosting
3. Connect your domain
4. Get it live on the internet!

---

## ✅ Quick Checklist

- [ ] Downloaded Node.js
- [ ] Downloaded VS Code
- [ ] Downloaded Git (optional)
- [ ] Downloaded your website code
- [ ] Opened project in VS Code
- [ ] Ran `npm install`
- [ ] Created `.env.local` file
- [ ] Ran `npm run db:push`
- [ ] Started with `npm run dev`
- [ ] Opened http://localhost:3000
- [ ] Website is running! 🎉

---

## 🎓 Learning Resources

If you want to learn more:
- **JavaScript/React:** https://www.codecademy.com/
- **Web Development:** https://www.freecodecamp.org/
- **VS Code Tips:** https://code.visualstudio.com/docs

---

## 💡 Tips

1. **Save frequently** - Use Ctrl + S often
2. **Use the terminal** - It shows you errors and helps debug
3. **Google errors** - If you get an error, copy it and Google it
4. **Take breaks** - Programming is a marathon, not a sprint!
5. **Ask for help** - Don't be shy about asking questions

---

**You've got this! 🚀 Your website is ready to go!**

If you have any questions, just ask. I'm here to help!
