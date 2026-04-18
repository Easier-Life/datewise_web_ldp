'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'en' | 'vi'

interface LangContextType {
  lang: Lang
  t: (key: string) => string
  toggleLang: () => void
}

const LangContext = createContext<LangContextType | null>(null)

const translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.privacy': 'Privacy',
    'nav.terms': 'Terms',
    'nav.support': 'Support',
    'nav.download': 'Download App',

    // Footer
    'footer.tagline': 'Your AI dating companion for meaningful connections.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.copyright': '© 2025 TrueVibe. All rights reserved.',
    'footer.features': 'Features',
    'footer.howItWorks': 'How It Works',
    'footer.pricing': 'Pricing',
    'footer.about': 'About Us',
    'footer.support': 'Support',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Home - Hero
    'home.hero.badge': 'AI-Powered Dating Coach',
    'home.hero.title': 'Date Seriously with Your Personal AI Coach',
    'home.hero.subtitle': 'Overcome "The Dip" with a real dating strategy. TrueVibe understands your profile and your matches to create deep connections, not just generic pick-up lines.',
    'home.hero.cta.appstore': 'Download on App Store',
    'home.hero.cta.googleplay': 'Get it on Google Play',
    'home.hero.cta.learnmore': 'Learn More',
    'home.hero.stats.users': 'Active Users',
    'home.hero.stats.matches': 'Better Match Rate',
    'home.hero.stats.rating': 'Store Rating',

    // Home - Features
    'home.features.badge': 'Three Pillars of Success',
    'home.features.title': 'Everything You Need to Win at Dating',
    'home.features.subtitle': 'TrueVibe combines AI intelligence with dating expertise to give you an unfair advantage in the modern dating landscape.',
    'home.features.profileGlowUp.title': 'Profile Glow Up',
    'home.features.profileGlowUp.description': 'Upload your profile photos and get a 4-section AI diagnosis: what strangers see, your hidden strengths, who you attract, and a prioritized action plan. Disagree with the AI? Challenge it — our debate mode lets you push back and see the score update in real time.',
    'home.features.profileGlowUp.tag1': 'Photo Analysis',
    'home.features.profileGlowUp.tag2': 'AI Debate Mode',
    'home.features.profileGlowUp.tag3': 'Attraction Score',
    'home.features.vibeCheck.title': 'Vibe Check',
    'home.features.vibeCheck.description': 'Upload up to 8 photos from a match\'s profile and get a full AI dossier: compatibility %, forensic authenticity check, psychological read, green flags & risks, and personalized opening lines tailored to their specific energy.',
    'home.features.vibeCheck.tag1': 'Forensic Analysis',
    'home.features.vibeCheck.tag2': 'Compatibility Score',
    'home.features.vibeCheck.tag3': 'Tailored Openers',
    'home.features.chatCopilot.title': 'Chat Copilot',
    'home.features.chatCopilot.description': 'Screenshot your conversation and get instant AI analysis. Is the vibe shifting? Are they hinting at a meetup? Get reply suggestions with psychological reasoning — not just "what to say," but exactly why it works.',
    'home.features.chatCopilot.tag1': 'Screenshot Analysis',
    'home.features.chatCopilot.tag2': 'Reply + Reasoning',
    'home.features.chatCopilot.tag3': 'Tone Matching',

    // Home - How It Works
    'home.howItWorks.badge': 'Simple & Effective',
    'home.howItWorks.title': 'From Setup to Success in Minutes',
    'home.howItWorks.subtitle': 'TrueVibe works alongside your existing dating apps — no switching required.',
    'home.howItWorks.step1.title': 'AI Onboarding Session',
    'home.howItWorks.step1.description': 'Answer 6 adaptive questions about where you\'re stuck in dating. TrueVibe\'s AI diagnoses your exact blind spot and delivers a personal letter — not a generic report — written just for you.',
    'home.howItWorks.step2.title': 'Profile Glow Up',
    'home.howItWorks.step2.description': 'Upload your dating profile photos. Get a scored breakdown across 4 sections — from first impression to action plan — and an AI debate to pressure-test your weak spots.',
    'home.howItWorks.step3.title': 'Vibe Check a Match',
    'home.howItWorks.step3.description': 'Upload up to 8 photos from someone\'s profile. Get their compatibility score, a forensic authenticity check, a psychological read, and custom opening lines in seconds.',
    'home.howItWorks.step4.title': 'Chat Copilot',
    'home.howItWorks.step4.description': 'Screenshot a conversation whenever you\'re unsure what to say. AI detects the moment, your tone, their signals — and gives you 3 reply options with the psychological reasoning behind each one.',

    // Home - Testimonials
    'home.testimonials.badge': 'Real Stories',
    'home.testimonials.title': 'What Our Users Say',
    'home.testimonials.subtitle': 'Thousands of people have transformed their dating life with TrueVibe.',
    'home.testimonials.1.name': 'Alex M.',
    'home.testimonials.1.role': 'Software Engineer, San Francisco',
    'home.testimonials.1.text': 'The Profile Glow Up caught that my corporate headshot was killing my match rate — something I never would have noticed myself. After I fixed the photo order based on the AI\'s action plan, my matches tripled in two weeks.',
    'home.testimonials.2.name': 'Jordan K.',
    'home.testimonials.2.role': 'Marketing Manager, New York',
    'home.testimonials.2.text': 'The forensic authenticity check in Vibe Check is incredible. I almost wasted months on someone — the AI spotted inconsistencies in their photos I completely missed. It\'s like having a brutally honest best friend with detective skills.',
    'home.testimonials.3.name': 'Taylor R.',
    'home.testimonials.3.role': 'Nurse, Austin',
    'home.testimonials.3.text': 'Chat Copilot doesn\'t just give you a reply — it tells you exactly WHY it works. "He\'s planted a soft invite, flip the frame back to him." That reasoning is what makes it feel like actual coaching, not just an autocomplete.',

    // Home - Download CTA
    'home.download.badge': 'Available Now',
    'home.download.title': 'Start Dating Smarter Today',
    'home.download.subtitle': 'Join thousands of singles who are using AI to build genuine connections. Download TrueVibe free and transform how you date.',
    'home.download.cta.appstore': 'Download on App Store',
    'home.download.cta.googleplay': 'Get it on Google Play',
    'home.download.free': 'Free to download',
    'home.download.sparks': '3 free AI analyses daily',
    'home.download.nocc': 'No credit card required',

    // Home - Pricing
    'home.pricing.badge': 'Expert Subscription',
    'home.pricing.title': 'Unlimited AI Coaching',
    'home.pricing.subtitle': 'Free users get 3 Sparks per day. Go Expert for unlimited access — no counters, no gating.',
    'home.pricing.free.title': 'Free',
    'home.pricing.free.price': '$0',
    'home.pricing.free.period': 'forever',
    'home.pricing.free.cta': 'Download Free',
    'home.pricing.free.feat1': '3 AI analyses per day',
    'home.pricing.free.feat2': 'All 3 core features',
    'home.pricing.free.feat3': 'Same AI quality as Expert',
    'home.pricing.weekly.title': 'Expert Weekly',
    'home.pricing.weekly.price': '$9.99',
    'home.pricing.weekly.intro': 'First week $2.99',
    'home.pricing.weekly.period': '/ week',
    'home.pricing.weekly.cta': 'Start Trial',
    'home.pricing.threeMonth.title': 'Expert 3-Month',
    'home.pricing.threeMonth.price': '$59.99',
    'home.pricing.threeMonth.period': '/ 3 months',
    'home.pricing.threeMonth.savings': 'Save ~50% vs weekly',
    'home.pricing.threeMonth.badge': 'Best Value',
    'home.pricing.threeMonth.cta': 'Get Best Value',
    'home.pricing.lifetime.title': 'Expert Lifetime',
    'home.pricing.lifetime.price': '$149.99',
    'home.pricing.lifetime.period': 'one-time',
    'home.pricing.lifetime.badge': 'Pay Once',
    'home.pricing.lifetime.cta': 'Get Lifetime Access',
    'home.pricing.expert.feat1': 'Unlimited AI analyses',
    'home.pricing.expert.feat2': 'No daily Spark limits',
    'home.pricing.expert.feat3': 'Priority AI processing',
    'home.pricing.expert.feat4': 'All future features included',

    // Home - Differentiation
    'home.differentiation.badge': 'THE DIFFERENCE',
    'home.differentiation.title': 'Stop Copying AI Pick-up Lines. Serious Dating Requires Real Strategy.',
    'home.differentiation.subtitle': 'Tried Rizz or Wingman and still got ghosted? That\'s because your matches want to date you, not a machine.',
    'home.differentiation.card1.title': 'Ordinary Apps',
    'home.differentiation.card1.step1': 'Generates a generic, cliché pick-up line from the internet.',
    'home.differentiation.card1.step2': 'You send an awkward message that doesn\'t sound like you.',
    'home.differentiation.card1.step3': 'They lose interest and ghost you.',
    'home.differentiation.card1.subtext': 'Dating with copy-pasted lines will never build a deep connection.',
    'home.differentiation.card2.title': 'TrueVibe Expert Coaching',
    'home.differentiation.card2.step1': 'Understands YOUR personality and analyzes their "Red Flags".',
    'home.differentiation.card2.step2': 'Suggests conversation tactics based on your authentic voice.',
    'home.differentiation.card2.step3': 'You send confident messages, build deep rapport, and secure high-quality dates.',
    'home.differentiation.card2.subtext': 'TrueVibe doesn\'t speak for you. We coach you to become your most attractive self.',
    'home.differentiation.cta': 'Master Your Conversations Today',

    // About
    'about.title': 'About TrueVibe',
    'about.description': 'We\'re on a mission to help serious relationship seekers navigate modern dating with confidence and clarity.',
    'about.mission.badge': 'Our Mission',
    'about.mission.title': 'Making Meaningful Connections the Norm',
    'about.mission.text1': 'Modern dating apps are overwhelming. Endless swiping, unanswered messages, confusing signals — the process is exhausting and often demoralizing. We built TrueVibe because we believe everyone deserves a fair shot at finding real love.',
    'about.mission.text2': 'TrueVibe isn\'t a dating app. We\'re a coaching companion that runs alongside the apps you already use. Our AI analyzes what actually works — not just generic advice — and gives you personalized, actionable guidance based on your unique situation and goals.',
    'about.mission.text3': 'We\'re built for serious relationship seekers: people who are done wasting time on bad matches and bad conversations, and who are ready to date with intention and intelligence.',
    'about.values.badge': 'Our Values',
    'about.values.title': 'What We Stand For',
    'about.values.1.title': 'Authenticity First',
    'about.values.1.text': 'We help you show your best authentic self — not create a false persona. Our AI suggestions are grounded in helping you communicate who you really are, more effectively.',
    'about.values.2.title': 'Privacy by Design',
    'about.values.2.text': 'Your dating life is deeply personal. We handle your data with extreme care, never sell it, and give you full control over what you share and what gets deleted.',
    'about.values.3.title': 'Science-Backed Advice',
    'about.values.3.text': 'Our recommendations are grounded in behavioral psychology, relationship science, and analysis of what actually drives successful matches and connections.',
    'about.values.4.title': 'Inclusive & Diverse',
    'about.values.4.text': 'TrueVibe serves people of all orientations, backgrounds, and relationship styles. Great connection advice is universal.',
    'about.team.badge': 'The Team',
    'about.team.title': 'Built by People Who Get It',
    'about.team.text': 'We\'re a small team of engineers, relationship coaches, and AI researchers who got tired of seeing smart, genuine people struggle in the modern dating landscape. We\'ve combined our expertise to build the tool we wish had existed when we were single.',
    'about.cta.title': 'Ready to Date Smarter?',
    'about.cta.text': 'Download TrueVibe and start your journey toward meaningful connections.',
    'about.cta.button': 'Download Now',

    // Privacy
    'privacy.title': 'Privacy Policy',
    'privacy.description': 'How TrueVibe collects, uses, and protects your personal information.',
    'privacy.lastUpdated': 'Last Updated: April 6, 2026',
    'privacy.toc.title': 'Table of Contents',
    'privacy.s1.title': '1. Introduction',
    'privacy.s1.content': `TrueVibe ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use the TrueVibe mobile application and related services (collectively, the "Service").

Please read this Privacy Policy carefully. By using the Service, you agree to the collection and use of your information in accordance with this policy. If you do not agree with any terms of this Privacy Policy, please discontinue use of the Service immediately.

This policy applies to all users of TrueVibe worldwide, with specific additional rights for residents of California (under CCPA) and the European Union/EEA (under GDPR), as detailed in Section 7.`,

    'privacy.s2.title': '2. Information We Collect',
    'privacy.s2.content': `We collect several types of information to provide and improve our Service:

**2.1 Information You Provide Directly**
- App Data Stored Locally: Your onboarding answers (dating goals, preferences, relationship type sought, age range preferences, current dating platforms used), analysis history, and app preferences are stored locally on your device using on-device storage. This data never leaves your device unless you explicitly submit it for AI analysis.
- Uploaded Images: Profile photos and screenshots of dating profiles you upload for analysis. These images are processed by our AI and are not permanently stored beyond what is necessary to deliver your analysis results.
- Conversation Content: Text excerpts from dating conversations you paste into the Chat Copilot feature for coaching purposes.
- Support Communications: Messages, emails, or other communications you send to our support team.

**2.2 Information Collected Automatically**
- Device Information: Device model, operating system and version, unique device identifiers, and mobile network information.
- Usage Data: Features you use, frequency of use, session duration, screens viewed, buttons tapped, and in-app navigation patterns.
- Log Data: IP address, date and time of requests, app crashes, and error logs.
- Purchase History: Record of Sparks purchases and subscription status (payment details are handled by Apple/Google and RevenueCat; we do not store raw card numbers).

**2.3 Information from Third-Party Services**
- Firebase / Google: Used for analytics and crash reporting only. Firebase may collect certain device and usage data per its own privacy policy. Firebase is NOT used for authentication.
- RevenueCat: Manages subscription and in-app purchase verification. Shares subscription status and transaction records with us.
- Google Gemini API: We send your uploaded images, onboarding answers, and conversation screenshots to Google's Gemini API to generate AI coaching outputs. Google processes this data as a sub-processor; see Section 10 for our AI Processing Notice.`,

    'privacy.s3.title': '3. How We Use Your Information',
    'privacy.s3.content': `We use the information we collect for the following purposes:

**3.1 Providing the Service**
- To analyze your dating profile photos and generate personalized improvement recommendations.
- To screen match profiles for compatibility signals, red flags, and authenticity.
- To provide conversation coaching and reply suggestions from conversation screenshots.
- To process and fulfill your Expert subscription purchases.

**3.2 Personalization**
- To tailor AI coaching outputs to your stated dating goals and preferences.
- To remember your settings and preferences across sessions.

**3.3 Service Improvement**
- To analyze aggregate usage patterns to improve our features and AI models.
- To identify and fix bugs, crashes, and performance issues.
- To conduct internal research and analysis to develop new features.

**3.4 Communications**
- To send transactional notifications (purchase receipts via App Store/Google Play).
- To send service announcements and important policy updates.
- To send promotional notifications and offers, if you have opted in (you may opt out at any time).

**3.5 Legal & Safety**
- To enforce our Terms of Service and other policies.
- To comply with applicable laws, regulations, and legal processes.
- To protect the rights, safety, and security of TrueVibe, our users, and the public.`,

    'privacy.s4.title': '4. Sharing Your Information',
    'privacy.s4.content': `We do not sell, rent, or trade your personal information. We share your information only in the following limited circumstances:

**4.1 Service Providers**
We share information with third-party vendors who help us operate the Service, including:
- Firebase / Google: Analytics and crash reporting.
- Google Gemini: AI model processing (see Section 10).
- RevenueCat: Subscription and purchase management.
- Customer support tools.

All service providers are contractually bound to process your data only as directed by us and in accordance with applicable privacy laws.

**4.2 Business Transfers**
If TrueVibe is involved in a merger, acquisition, or asset sale, your information may be transferred as a business asset. We will provide notice before your information becomes subject to a different privacy policy.

**4.3 Legal Requirements**
We may disclose your information if required by law, court order, or government authority, or if we believe disclosure is necessary to protect the rights, safety, or security of TrueVibe, its users, or the public.

**4.4 With Your Consent**
We may share your information for any other purpose with your explicit consent.`,

    'privacy.s5.title': '5. Data Retention',
    'privacy.s5.content': `TrueVibe uses a local-first data model. Most of your data is stored on your device and is not transmitted to our servers.

- App data stored locally on your device: Your onboarding answers, preferences, and analysis history are stored locally on your device. You can clear all local data at any time from Settings > Clear Data. Uninstalling the app also removes all local data.
- Uploaded images: Processed transiently to deliver your analysis results; not retained on our servers after the coaching response is delivered.
- Conversation snippets: Processed transiently by our AI; not stored permanently on our servers after the coaching response is delivered.
- Purchase records: Retained for up to 7 years to comply with accounting and tax obligations (managed via RevenueCat and your App Store/Google Play account).
- Log data: Retained for up to 12 months for security and debugging purposes.

You can clear all locally stored app data at any time from Settings > Clear Data within the app. See Section 7 for additional rights.`,

    'privacy.s6.title': '6. Security',
    'privacy.s6.content': `We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

- Encryption of data in transit using TLS/HTTPS.
- Encryption of sensitive data at rest.
- Access controls limiting employee access to personal data on a need-to-know basis.
- Regular security audits and vulnerability assessments.
- Secure development practices and code review processes.

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security. In the event of a data breach that affects your rights and freedoms, we will notify you and relevant authorities as required by applicable law.`,

    'privacy.s7.title': '7. Your Rights',
    'privacy.s7.content': `Depending on your location, you may have the following rights regarding your personal information:

**7.1 Rights for All Users**
- Access: Request a copy of the personal information we hold about you.
- Correction: Request correction of inaccurate or incomplete information.
- Deletion: Request deletion of your personal information ("right to be forgotten"). You can clear all locally stored data from Settings > Clear Data within the app.
- Portability: Request your data in a structured, machine-readable format.
- Objection: Object to certain types of processing, including direct marketing.

**7.2 California Residents (CCPA/CPRA)**
California residents have additional rights under the California Consumer Privacy Act:
- Right to Know: Request disclosure of the categories and specific pieces of personal information we collect, use, and share.
- Right to Delete: Request deletion of personal information we have collected from you.
- Right to Opt-Out of Sale: We do not sell personal information, so this right is not applicable.
- Right to Non-Discrimination: We will not discriminate against you for exercising your CCPA rights.
- Right to Correct: Request correction of inaccurate personal information.
- Right to Limit Use of Sensitive Personal Information: Where applicable.

To exercise California rights, contact us at support.truevibe@easier.today with the subject line "CCPA Request."

**7.3 EU/EEA Residents (GDPR)**
EU/EEA residents have rights under the General Data Protection Regulation:
- Lawful Basis: We process your data based on contract performance (to provide the Service), legitimate interests (service improvement, security), legal obligation, and consent (marketing communications).
- Data Subject Rights: Access, rectification, erasure, restriction of processing, portability, and objection.
- Supervisory Authority: You have the right to lodge a complaint with your local data protection authority.
- International Transfers: Data may be transferred to the United States. We rely on Standard Contractual Clauses (SCCs) or other approved mechanisms for such transfers.

To exercise any privacy right, email us at support.truevibe@easier.today. We will respond within 30 days (or 45 days for complex requests).`,

    'privacy.s8.title': '8. Children\'s Privacy',
    'privacy.s8.content': `TrueVibe is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. Users between ages 13 and 17 may use the Service only with verifiable parental or guardian consent.

If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us immediately at support.truevibe@easier.today. We will promptly delete such information from our systems.

We comply with the Children's Online Privacy Protection Act (COPPA) and similar laws in other jurisdictions.`,

    'privacy.s9.title': '9. In-App Purchases & Subscriptions',
    'privacy.s9.content': `TrueVibe offers a free tier (3 Sparks/day) and Expert subscriptions (Weekly, 3-Month, Lifetime) for unlimited access.

**Payment Processing**
All payment transactions are processed by Apple (App Store) or Google (Google Play). We do not directly collect or store your credit card or payment account information. RevenueCat acts as an intermediary to verify and manage subscription status.

**Data Associated with Purchases**
We receive and store: transaction identifiers, purchase timestamps, product purchased, and subscription status. This information is used to unlock Expert features and maintain your subscription status on your device.

**Subscription Auto-Renewal**
Weekly and 3-Month Expert subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period. Lifetime subscriptions are a one-time purchase with no recurring billing. You can manage or cancel your subscription through your device's App Store or Google Play settings.

**Refunds**
Requests for refunds on subscriptions are handled by Apple or Google per their respective refund policies.`,

    'privacy.s10.title': '10. AI Processing Notice',
    'privacy.s10.content': `TrueVibe uses artificial intelligence to generate personalized coaching insights. This section explains in full detail how your content is handled, in compliance with Apple App Store guidelines 5.1.1(i) and 5.1.2(i).

**Third-Party AI Processor**
The AI features in TrueVibe are powered by **Google Gemini (Vertex AI — Google Cloud)**. Google is the named third party that receives and processes the data described below.

**What We Send to AI**
When you use an AI feature, the following data is transmitted to Google Gemini (Vertex AI — Google Cloud) to generate your coaching output:
- Your onboarding answers (age, gender, and current dating situation) to provide personalization context.
- Your dating profile photos (for Profile Glow Up analysis).
- Photos of people you are interested in, uploaded from their dating profile (for Vibe Check analysis).
- Screenshots of dating conversations (for Chat Copilot analysis).

**User Consent Before Data Is Sent**
TrueVibe obtains your explicit consent before any personal data is transmitted to Google Gemini. An in-app consent dialog is presented the first time you use an AI feature, clearly explaining what data will be sent and to whom. No data is transmitted to any AI system until you have confirmed your consent.

**How Google Handles Your Data**
Per Google Cloud's AI/ML Privacy Commitment, Google does not use data submitted through the Vertex AI / Gemini API to train, improve, or refine its AI models. Your data is processed solely to generate the response for your session and is not retained by Google long-term after processing is complete.

**No Human Review**
Our team does not read your private messages, conversations, or personal profile content. AI processing is fully automated. Our support team cannot access your personal data as it is stored locally on your device.

**Data Minimization**
We send only what is necessary to generate your coaching output. We do not include unnecessary personal identifiers when sending data to Google Gemini.

**Your Control**
You control what you share with TrueVibe. You are never required to upload private conversation content or photos. All AI analysis features are opt-in by design. You may withdraw consent at any time by discontinuing use of the AI features.`,

    'privacy.s11.title': '11. Changes to This Policy',
    'privacy.s11.content': `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make material changes, we will:

- Update the "Last Updated" date at the top of this policy.
- Send an in-app notification to users.
- In some cases, seek your renewed consent if required by law.

Your continued use of the Service after changes become effective constitutes your acceptance of the revised Privacy Policy. We encourage you to review this policy periodically.`,

    'privacy.s12.title': '12. Contact Us',
    'privacy.s12.content': `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**TrueVibe Support**
Email: support.truevibe@easier.today
Subject: Privacy Inquiry

We are committed to resolving privacy concerns promptly and will respond to all inquiries within 30 business days.

For urgent data security concerns or potential breaches, please email support.truevibe@easier.today with the subject line "URGENT: Security Concern."`,

    // Terms
    'terms.title': 'Terms of Service',
    'terms.description': 'Please read these terms carefully before using TrueVibe.',
    'terms.lastUpdated': 'Last Updated: January 1, 2025',
    'terms.toc.title': 'Table of Contents',
    'terms.s1.title': '1. Acceptance of Terms',
    'terms.s1.content': `These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and TrueVibe ("Company," "we," "our," or "us") governing your access to and use of the TrueVibe mobile application, website, and all related services (collectively, the "Service").

BY DOWNLOADING, INSTALLING, ACCESSING, OR USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICE.

We reserve the right to modify these Terms at any time. Material changes will be communicated via in-app notification or email. Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms.`,

    'terms.s2.title': '2. Description of Service',
    'terms.s2.content': `TrueVibe is an AI-powered dating companion application designed to help users improve their dating profile presentation, screen potential matches, and improve dating conversations.

**What TrueVibe Is:**
- A personal coaching tool that works alongside existing dating platforms (Tinder, Bumble, Hinge, and others).
- An AI-driven analytics service that provides personalized recommendations.
- A productivity and self-improvement tool for the context of dating.

**What TrueVibe Is NOT:**
- A dating platform or matchmaking service. TrueVibe does not connect users with potential romantic partners.
- A guarantee of romantic success. Our AI provides coaching suggestions, not guaranteed outcomes.
- A substitute for professional psychological, therapeutic, or relationship counseling.
- Affiliated with, endorsed by, or partnered with any third-party dating application mentioned.

The Service includes three core features: Profile Glow Up (profile analysis and optimization), Vibe Check (match screening and opener generation), and Chat Copilot (conversation coaching).`,

    'terms.s3.title': '3. Eligibility',
    'terms.s3.content': `To use TrueVibe, you must meet the following eligibility requirements:

**Age Requirements**
- You must be at least 18 years of age to use the Service independently.
- Users aged 13 to 17 may use the Service only with verifiable parental or legal guardian consent. By using the Service as a minor (13-17), you represent that your parent or guardian has reviewed and agreed to these Terms on your behalf.
- The Service is not available to anyone under 13 years of age.

**Geographic Availability**
- The Service is available in jurisdictions where it has not been restricted or prohibited by applicable law. You are responsible for ensuring compliance with local laws before using the Service.

By using the Service, you represent and warrant that you meet all eligibility requirements.`,

    'terms.s4.title': '4. User Responsibilities',
    'terms.s4.content': `**4.1 Local Data**
All your data (onboarding answers, analysis history, preferences) is stored locally on your device. You are responsible for your device's security.

**4.2 Accurate Information**
You agree to provide accurate information when using the app's onboarding and analysis features to receive relevant coaching.

**4.3 Content You Submit**
You are responsible for any profile photos, conversation excerpts, or match profile information you submit for analysis.

**4.4 Data Deletion**
You may delete all locally stored app data at any time through Settings > Clear Data. Uninstalling the app also removes all local data.`,

    'terms.s5.title': '5. Acceptable Use & Prohibited Conduct',
    'terms.s5.content': `You agree to use TrueVibe only for lawful purposes and in accordance with these Terms. The following conduct is strictly prohibited:

**5.1 Prohibited Content**
- Uploading images or content depicting minors in any romantic, sexual, or inappropriate context.
- Uploading images or content that is obscene, pornographic, or sexually explicit.
- Uploading images or content that promotes violence, hate speech, or discrimination.
- Uploading content you do not have the right to share.

**5.2 Prohibited Behavior**
- Using the Service to harass, stalk, threaten, or harm any individual.
- Using AI coaching outputs to deceive, manipulate, or defraud others.
- Attempting to reverse-engineer, decompile, or extract source code from the app.
- Using automated tools (bots, scrapers) to access or extract data from the Service.
- Circumventing payment systems, including unauthorized access to premium features.
- Sharing or reselling access to premium features.

**5.3 Prohibited Use of AI Features**
- Using AI-generated content to impersonate someone else.
- Using AI coaching to facilitate or enable illegal activities.
- Attempting to manipulate or "jailbreak" our AI systems to produce prohibited content.

**5.4 Consequences**
Violation of this Section may result in immediate termination of your right to use the Service, forfeiture of unused Sparks and subscription time, and potential legal action where applicable.`,

    'terms.s6.title': '6. Subscriptions, Sparks & Payments',
    'terms.s6.content': `**6.1 Free Tier**
TrueVibe offers a free tier that receives 3 Sparks per day. Sparks reset daily and cannot be accumulated. Free users have access to all three core features (Profile Glow Up, Vibe Check, Chat Copilot) within the daily Spark allowance.

**6.2 Sparks (Daily Credits)**
Sparks are the in-app credit system used to access AI-powered features. Key terms:
- Free users receive 3 Sparks per day, resetting at midnight local time.
- Sparks have no cash value and cannot be purchased as consumables.
- Sparks are non-transferable and tied to your device.
- Unused daily Sparks do not carry over to the next day.

**6.3 Expert Subscription**
The Expert subscription provides unlimited Spark access (no daily limits) for a recurring fee. Available plans:
- Expert Weekly: $9.99/week (introductory offer may apply at $2.99 for first week).
- Expert 3-Month: $59.99 per 3-month period.
- Expert Lifetime: $149.99 one-time purchase (no recurring billing).

Subscription terms:
- Recurring subscriptions (Weekly, 3-Month) are billed in advance for the subscription period.
- Payment is charged to your Apple/Google account upon confirmation of purchase.
- Recurring subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.
- You may manage and cancel your subscription through your device's subscription settings (App Store or Google Play).
- No refunds are provided for the unused portion of an active subscription period, except where required by applicable law.
- Lifetime access is a one-time purchase with no recurring billing.

**6.4 Price Changes**
We reserve the right to change subscription prices with reasonable notice. Price changes will take effect at the start of your next billing cycle.

**6.5 Refund Policy**
All purchases are final, subject to applicable App Store or Google Play refund policies. Refund requests must be submitted through the respective platform (Apple or Google). We do not process refunds directly.

**6.6 Taxes**
Prices may be inclusive or exclusive of applicable taxes depending on your jurisdiction. You are responsible for any applicable taxes.`,

    'terms.s7.title': '7. AI-Generated Content Disclaimer',
    'terms.s7.content': `TrueVibe uses artificial intelligence to generate personalized coaching insights, suggestions, and recommendations. By using our AI features, you acknowledge and agree to the following:

**7.1 Nature of AI Output**
- AI-generated content is produced by automated systems and reflects patterns learned from data, not human judgment.
- Suggestions are probabilistic and based on general patterns, not specific knowledge of any individual person (including your matches).
- Results may not be accurate, appropriate, or suitable for every situation.

**7.2 Not a Guarantee of Results**
- TrueVibe does not guarantee that following our suggestions will result in more matches, dates, relationships, or any specific romantic outcome.
- Individual results vary significantly based on personal factors outside our control.

**7.3 Not Professional Advice**
- AI coaching outputs are not a substitute for professional psychological, therapeutic, relationship, or legal advice.
- If you are experiencing significant emotional distress related to dating or relationships, please consult a qualified mental health professional.

**7.4 Your Responsibility**
- You are solely responsible for how you use AI-generated suggestions.
- You should exercise your own judgment before using any suggested content in real interactions.
- We are not liable for any consequences arising from your use of AI-generated suggestions.

**7.5 Third-Party Profiles**
- When you submit a match's profile for analysis, you represent that you have obtained that profile content through normal use of the relevant dating application.
- Do not submit private information about others that was obtained improperly or without their public disclosure.`,

    'terms.s8.title': '8. Intellectual Property',
    'terms.s8.content': `**8.1 Our Property**
The Service, including its original content, features, functionality, design, software, algorithms, logos, and trademarks, is owned by TrueVibe and its licensors and is protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without our explicit written permission.

**8.2 Your Content**
You retain ownership of content you upload to the Service (photos, text, conversation excerpts). By uploading content, you grant TrueVibe a limited, non-exclusive, royalty-free license to process and analyze that content solely for the purpose of delivering the Service to you. This license terminates when you delete the content from the app.

**8.3 Feedback**
If you submit feedback, suggestions, or ideas about the Service, you grant us an unrestricted, royalty-free right to use such feedback for any purpose, without compensation or attribution to you.

**8.4 AI Output**
AI-generated coaching content produced for you through the Service is provided for your personal use. You may not resell, redistribute, or commercialize AI-generated outputs from TrueVibe.`,

    'terms.s9.title': '9. Privacy',
    'terms.s9.content': `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and share information about you when you use the Service. By using the Service, you agree to our collection and use of data as described in the Privacy Policy.

The Privacy Policy is incorporated into these Terms by reference and forms part of this agreement. Please review our Privacy Policy at truevibe.easier.today/privacy.`,

    'terms.s10.title': '10. Disclaimer of Warranties',
    'terms.s10.content': `THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TRUEVIBE DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:

- IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
- WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
- WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY CONTENT OR AI-GENERATED OUTPUT.
- WARRANTIES THAT THE SERVICE WILL MEET YOUR SPECIFIC REQUIREMENTS OR EXPECTATIONS.

Some jurisdictions do not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you.`,

    'terms.s11.title': '11. Limitation of Liability',
    'terms.s11.content': `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TRUEVIBE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR:

- ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
- LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES.
- DAMAGES ARISING FROM YOUR USE OR INABILITY TO USE THE SERVICE.
- DAMAGES ARISING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA.
- DAMAGES ARISING FROM ANY THIRD-PARTY CONDUCT OR CONTENT.
- DAMAGES ARISING FROM YOUR RELIANCE ON AI-GENERATED COACHING CONTENT.

IN NO EVENT SHALL TRUEVIBE'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO THE SERVICE EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID TO TRUEVIBE IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS ($100).

Some jurisdictions do not allow limitations on implied warranties or liability for incidental damages, so the above limitations may not fully apply to you.`,

    'terms.s12.title': '12. Indemnification',
    'terms.s12.content': `You agree to indemnify, defend, and hold harmless TrueVibe and its officers, directors, employees, agents, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:

- Your violation of these Terms.
- Your use of the Service, including AI-generated coaching outputs.
- Your User Content or anything you upload to the Service.
- Your violation of any third party's rights, including intellectual property rights.
- Your violation of any applicable law or regulation.

We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which case you will cooperate with our defense of such claim.`,

    'terms.s13.title': '13. Governing Law & Dispute Resolution',
    'terms.s13.content': `**13.1 Governing Law**
These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. The United Nations Convention on Contracts for the International Sale of Goods does not apply.

**13.2 Arbitration Agreement**
Any dispute, claim, or controversy arising from or relating to these Terms or the Service shall be resolved by binding individual arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, rather than in court. You and TrueVibe each waive the right to a jury trial and to participate in class action lawsuits.

**13.3 Small Claims Exception**
Either party may bring an individual action in small claims court in the county of your residence or in Santa Clara County, California, provided the claim qualifies for small claims court.

**13.4 Injunctive Relief**
Notwithstanding the arbitration agreement, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent actual or threatened infringement of intellectual property rights or breach of confidentiality obligations.

**13.5 Venue**
For any matters not subject to arbitration, you consent to the exclusive jurisdiction of the state and federal courts located in Santa Clara County, California.`,

    'terms.s14.title': '14. Changes to Terms',
    'terms.s14.content': `We reserve the right to modify these Terms at any time. When we make material changes, we will:

- Update the "Last Updated" date at the top of these Terms.
- Provide prominent in-app notification of significant changes.
- Where required by law, seek your explicit consent to the revised Terms.

Your continued use of the Service after the effective date of any changes constitutes your binding acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the Service and may uninstall the application.

We recommend reviewing these Terms periodically. Material changes will not apply retroactively to disputes that arose before the change date.`,

    'terms.s15.title': '15. Contact & Miscellaneous',
    'terms.s15.content': `**15.1 Contact**
For questions about these Terms of Service, please contact:

TrueVibe Support
Email: support.truevibe@easier.today
Subject: Terms of Service Inquiry

**15.2 Entire Agreement**
These Terms, together with our Privacy Policy, constitute the entire agreement between you and TrueVibe regarding the Service and supersede all prior agreements.

**15.3 Severability**
If any provision of these Terms is found unenforceable, the remaining provisions will remain in full effect.

**15.4 Waiver**
Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.

**15.5 Assignment**
You may not assign your rights under these Terms without our prior written consent. We may assign our rights and obligations under these Terms at our discretion.

**15.6 Force Majeure**
We will not be liable for any failure or delay in performance due to circumstances beyond our reasonable control.`,

    // Support
    'support.title': 'Support Center',
    'support.description': 'We\'re here to help. Find answers to common questions or reach out directly.',
    'support.faq.badge': 'FAQ',
    'support.faq.title': 'Frequently Asked Questions',
    'support.faq.q1': 'What is TrueVibe and how does it work?',
    'support.faq.a1': 'TrueVibe is an AI-powered dating companion app that works alongside your existing dating apps like Tinder, Bumble, and Hinge. It has three core features: Profile Glow Up (analyzes your profile photos and gives a scored action plan), Vibe Check (upload up to 8 photos of a match for a full AI dossier with compatibility score and openers), and Chat Copilot (screenshot your conversation to get reply suggestions with psychological reasoning). Free users get 3 AI analyses per day. Upgrade to Expert for unlimited access.',
    'support.faq.q2': 'What are Sparks and how does the free tier work?',
    'support.faq.a2': 'Sparks are the in-app currency for AI analyses. Free users receive 3 Sparks per day — enough for 3 full analyses (Profile Glow Up, Vibe Check, or Chat Copilot). Sparks reset daily. To unlock unlimited analyses with no daily limits, upgrade to an Expert subscription (Weekly, 3-Month, or Lifetime).',
    'support.faq.q3': 'Is my dating conversation data private?',
    'support.faq.a3': 'Yes, absolutely. Your privacy is our top priority. Screenshots you submit to Chat Copilot are processed by our AI to generate coaching and are not permanently stored on our servers after your response is delivered. Our team does not view your private conversations. All data processing happens via encrypted connections. See our Privacy Policy for full details.',
    'support.faq.q4': 'How do I cancel my Expert subscription?',
    'support.faq.a4': 'You can cancel your Expert subscription at any time through your device\'s subscription settings. On iPhone/iPad: Go to Settings > Apple ID > Subscriptions > TrueVibe Expert > Cancel Subscription. On Android: Open Google Play > tap your profile icon > Payments & subscriptions > Subscriptions > TrueVibe > Cancel. Cancellation takes effect at the end of your current billing period.',
    'support.faq.q5': 'Can I get a refund for my subscription?',
    'support.faq.a5': 'For subscription refund requests, please contact Apple (App Store) or Google (Google Play) directly, as all payments are processed through those platforms. We do not process refunds directly. Refund decisions are at the discretion of Apple or Google per their respective policies.',
    'support.faq.q6': 'Does TrueVibe work for all sexual orientations and relationship types?',
    'support.faq.a6': 'Yes! TrueVibe is fully inclusive and designed to help all users regardless of sexual orientation, gender identity, or relationship style (monogamous, polyamorous, casual, serious, etc.). During onboarding, you specify your preferences, and all AI coaching is tailored accordingly.',
    'support.faq.q7': 'How do I clear my data or reset the app?',
    'support.faq.a7': 'TrueVibe stores all your data locally on your device — there is no account or server-side profile. To clear your data, go to Settings (bottom tab) > Clear Data > Confirm. This permanently removes all local data including your onboarding profile and analysis history. You can also simply uninstall the app to remove all data. If you need further help, email us at support.truevibe@easier.today.',
    'support.faq.q8': 'The app is not working correctly. What should I do?',
    'support.faq.a8': 'First, try closing and reopening the app. If issues persist, try: (1) Check your internet connection; (2) Update to the latest version of TrueVibe from the App Store or Google Play; (3) Restart your device; (4) Uninstall and reinstall the app (your local data will be cleared on reinstall). If none of these steps help, please contact us at support.truevibe@easier.today with a description of the issue and your device model and OS version.',
    'support.contact.badge': 'Get in Touch',
    'support.contact.title': 'Contact Support',
    'support.contact.subtitle': 'Can\'t find what you need? Send us a message and we\'ll respond within 24 hours.',
    'support.contact.name': 'Your Name',
    'support.contact.email': 'Your Email',
    'support.contact.subject': 'Subject',
    'support.contact.message': 'Message',
    'support.contact.messagePlaceholder': 'Describe your issue or question in detail...',
    'support.contact.send': 'Send Message',
    'support.contact.emailDirect': 'Or email us directly at',
    'support.contact.response': 'We typically respond within 24 hours on business days.',

    // Delete Data
    'delete.title': 'Clear Your Data',
    'delete.description': 'Instructions for clearing all TrueVibe data stored on your device.',
    'delete.intro': 'TrueVibe has no accounts and no server-side profile — all your data is stored locally on your device only. Clearing it is instant and permanent.',
    'delete.warning': 'Warning: This action is permanent',
    'delete.warningText': 'Once cleared, all your local data — including your onboarding profile and analysis history — will be permanently removed from this device. This action cannot be reversed.',
    'delete.method1.title': 'Method 1: Clear In-App (Recommended)',
    'delete.method1.step1': 'Open the TrueVibe app on your device.',
    'delete.method1.step2': 'Navigate to the More tab (bottom navigation bar).',
    'delete.method1.step3': 'Tap "Settings".',
    'delete.method1.step4': 'Tap "Clear Data" and confirm.',
    'delete.method1.step5': 'All local data will be immediately and permanently deleted. The app will return to the onboarding screen.',
    'delete.method2.title': 'Method 2: Uninstall the App',
    'delete.method2.text': 'Uninstalling TrueVibe removes all locally stored data from your device:',
    'delete.method2.step1': 'On iPhone/iPad: Press and hold the TrueVibe icon > Remove App > Delete App.',
    'delete.method2.step2': 'On Android: Press and hold the TrueVibe icon > Uninstall > OK.',
    'delete.method2.step3': 'All local data is removed when the app is uninstalled.',
    'delete.method2.step4': 'Note: Uninstalling does not cancel an active Expert subscription. Manage your subscription separately in App Store or Google Play settings.',
    'delete.dataInfo.title': 'What Gets Cleared',
    'delete.dataInfo.text': 'When you clear data or uninstall the app:',
    'delete.dataInfo.1': 'Onboarding profile and all preferences are immediately deleted.',
    'delete.dataInfo.2': 'All analysis history (Profile Glow Up, Vibe Check, Chat Copilot) is permanently removed.',
    'delete.dataInfo.3': 'There is no server-side account to delete — your data never left your device.',
    'delete.dataInfo.4': 'Expert subscription status is managed by Apple/Google and is not affected by clearing app data.',
    'delete.contact': 'Need help or have feedback? Contact us at support.truevibe@easier.today',
  },

  vi: {
    // Nav
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.privacy': 'Bảo mật',
    'nav.terms': 'Điều khoản',
    'nav.support': 'Hỗ trợ',
    'nav.download': 'Tải ứng dụng',

    // Footer
    'footer.tagline': 'Người bạn đồng hành AI cho những kết nối ý nghĩa.',
    'footer.product': 'Sản phẩm',
    'footer.company': 'Công ty',
    'footer.legal': 'Pháp lý',
    'footer.copyright': '© 2025 TrueVibe. Tất cả quyền được bảo lưu.',
    'footer.features': 'Tính năng',
    'footer.howItWorks': 'Cách hoạt động',
    'footer.pricing': 'Bảng giá',
    'footer.about': 'Về chúng tôi',
    'footer.support': 'Hỗ trợ',
    'footer.privacy': 'Chính sách bảo mật',
    'footer.terms': 'Điều khoản dịch vụ',

    // Home - Hero
    'home.hero.badge': 'Huấn luyện viên hẹn hò AI',
    'home.hero.title': 'Tự tin hẹn hò nghiêm túc với AI Coach cá nhân',
    'home.hero.subtitle': 'Vượt qua giai đoạn \'The Dip\' với chiến lược hẹn hò từ AI. TrueVibe thấu hiểu profile của bạn và đối phương để tạo ra những cuộc trò chuyện sâu sắc, không phải thả thính dạo.',
    'home.hero.cta.appstore': 'Tải trên App Store',
    'home.hero.cta.googleplay': 'Tải trên Google Play',
    'home.hero.cta.learnmore': 'Tìm hiểu thêm',
    'home.hero.stats.users': 'Người dùng tích cực',
    'home.hero.stats.matches': 'Tỷ lệ match tốt hơn',
    'home.hero.stats.rating': 'Đánh giá trên Store',

    // Home - Features
    'home.features.badge': 'Ba trụ cột thành công',
    'home.features.title': 'Mọi thứ bạn cần để thành công trong hẹn hò',
    'home.features.subtitle': 'TrueVibe kết hợp trí tuệ AI với kiến thức hẹn hò chuyên sâu để mang lại cho bạn lợi thế vượt trội trong bối cảnh hẹn hò hiện đại.',
    'home.features.profileGlowUp.title': 'Nâng cấp hồ sơ',
    'home.features.profileGlowUp.description': 'Tải ảnh hồ sơ lên và nhận chẩn đoán AI theo 4 phần: người lạ nhìn bạn thế nào, điểm mạnh ẩn, bạn đang thu hút ai, và kế hoạch hành động ưu tiên. Không đồng ý với AI? Hãy tranh luận — chế độ debate cho phép bạn phản bác và xem điểm cập nhật ngay.',
    'home.features.profileGlowUp.tag1': 'Phân tích ảnh',
    'home.features.profileGlowUp.tag2': 'Chế độ Debate AI',
    'home.features.profileGlowUp.tag3': 'Điểm thu hút',
    'home.features.vibeCheck.title': 'Kiểm tra Vibe',
    'home.features.vibeCheck.description': 'Tải lên tối đa 8 ảnh từ hồ sơ của người match và nhận hồ sơ AI đầy đủ: % tương thích, kiểm tra tính xác thực pháp y, phân tích tâm lý, tín hiệu tốt & rủi ro, và câu mở đầu cá nhân hóa phù hợp với năng lượng của họ.',
    'home.features.vibeCheck.tag1': 'Phân tích pháp y',
    'home.features.vibeCheck.tag2': 'Điểm tương thích',
    'home.features.vibeCheck.tag3': 'Câu mở đầu riêng',
    'home.features.chatCopilot.title': 'Chat Copilot',
    'home.features.chatCopilot.description': 'Chụp màn hình cuộc trò chuyện và nhận phân tích AI tức thì. Vibe có đang thay đổi không? Họ có đang ngầm gợi ý gặp mặt không? Nhận gợi ý trả lời kèm lý giải tâm lý — không chỉ "nói gì" mà còn "tại sao nó hiệu quả".',
    'home.features.chatCopilot.tag1': 'Phân tích ảnh chụp',
    'home.features.chatCopilot.tag2': 'Trả lời + Lý giải',
    'home.features.chatCopilot.tag3': 'Khớp phong cách',

    // Home - How It Works
    'home.howItWorks.badge': 'Đơn giản & Hiệu quả',
    'home.howItWorks.title': 'Từ cài đặt đến thành công trong vài phút',
    'home.howItWorks.subtitle': 'TrueVibe hoạt động song song với các ứng dụng hẹn hò hiện có của bạn — không cần chuyển đổi.',
    'home.howItWorks.step1.title': 'Phiên chẩn đoán AI',
    'home.howItWorks.step1.description': 'Trả lời 6 câu hỏi thích nghi về điểm bạn đang bị kẹt trong hẹn hò. AI của TrueVibe chẩn đoán đúng điểm mù và gửi một bức thư cá nhân — không phải báo cáo chung chung — viết riêng cho bạn.',
    'home.howItWorks.step2.title': 'Nâng cấp hồ sơ',
    'home.howItWorks.step2.description': 'Tải ảnh hồ sơ hẹn hò lên. Nhận phân tích có điểm số theo 4 phần — từ ấn tượng đầu tiên đến kế hoạch hành động — và chế độ debate AI để kiểm tra điểm yếu của bạn.',
    'home.howItWorks.step3.title': 'Kiểm tra Vibe người match',
    'home.howItWorks.step3.description': 'Tải lên tối đa 8 ảnh từ hồ sơ của ai đó. Nhận điểm tương thích, kiểm tra tính xác thực pháp y, phân tích tâm lý, và câu mở đầu tùy chỉnh trong vài giây.',
    'home.howItWorks.step4.title': 'Chat Copilot',
    'home.howItWorks.step4.description': 'Chụp màn hình cuộc trò chuyện bất cứ khi nào bạn không chắc nên nói gì. AI phát hiện khoảnh khắc, tone của bạn, tín hiệu của họ — và cho bạn 3 lựa chọn trả lời kèm lý giải tâm lý đằng sau.',

    // Home - Testimonials
    'home.testimonials.badge': 'Câu chuyện thật',
    'home.testimonials.title': 'Người dùng nói gì về chúng tôi',
    'home.testimonials.subtitle': 'Hàng ngàn người đã thay đổi cuộc sống hẹn hò của họ với TrueVibe.',
    'home.testimonials.1.name': 'Alex M.',
    'home.testimonials.1.role': 'Kỹ sư phần mềm, San Francisco',
    'home.testimonials.1.text': 'Profile Glow Up phát hiện ảnh doanh nghiệp của tôi đang giết chết tỷ lệ match — điều tôi không bao giờ tự nhận ra được. Sau khi sắp xếp lại thứ tự ảnh theo kế hoạch của AI, match của tôi tăng gấp 3 trong hai tuần.',
    'home.testimonials.2.name': 'Jordan K.',
    'home.testimonials.2.role': 'Giám đốc marketing, New York',
    'home.testimonials.2.text': 'Kiểm tra tính xác thực pháp y trong Vibe Check thật sự ấn tượng. Tôi suýt lãng phí nhiều tháng — AI phát hiện sự không nhất quán trong ảnh mà tôi hoàn toàn bỏ sót. Như có người bạn thật thà với kỹ năng thám tử.',
    'home.testimonials.3.name': 'Taylor R.',
    'home.testimonials.3.role': 'Y tá, Austin',
    'home.testimonials.3.text': 'Chat Copilot không chỉ cho bạn câu trả lời — nó giải thích chính xác tại sao nó hiệu quả. "Anh ấy đã ngầm mời, hãy đảo ngược frame lại cho anh ấy." Lý giải đó mới là thứ khiến nó giống coaching thật, không phải chỉ là autocomplete.',

    // Home - Download CTA
    'home.download.badge': 'Có sẵn ngay',
    'home.download.title': 'Bắt đầu hẹn hò thông minh hơn ngay hôm nay',
    'home.download.subtitle': 'Tham gia hàng ngàn người độc thân đang sử dụng AI để xây dựng kết nối thực sự. Tải TrueVibe miễn phí và thay đổi cách bạn hẹn hò.',
    'home.download.cta.appstore': 'Tải trên App Store',
    'home.download.cta.googleplay': 'Tải trên Google Play',
    'home.download.free': 'Tải xuống miễn phí',
    'home.download.sparks': '3 phân tích AI miễn phí mỗi ngày',
    'home.download.nocc': 'Không cần thẻ tín dụng',

    // Home - Pricing
    'home.pricing.badge': 'Gói Expert',
    'home.pricing.title': 'Coaching AI không giới hạn',
    'home.pricing.subtitle': 'Người dùng miễn phí nhận 3 Sparks mỗi ngày. Nâng cấp lên Expert để không giới hạn — không còn đồng hồ đếm, không còn rào cản.',
    'home.pricing.free.title': 'Miễn phí',
    'home.pricing.free.price': '$0',
    'home.pricing.free.period': 'mãi mãi',
    'home.pricing.free.cta': 'Tải miễn phí',
    'home.pricing.free.feat1': '3 phân tích AI mỗi ngày',
    'home.pricing.free.feat2': 'Đủ cả 3 tính năng cốt lõi',
    'home.pricing.free.feat3': 'Chất lượng AI như Expert',
    'home.pricing.weekly.title': 'Expert Tuần',
    'home.pricing.weekly.price': '$9.99',
    'home.pricing.weekly.intro': 'Tuần đầu chỉ $2.99',
    'home.pricing.weekly.period': '/ tuần',
    'home.pricing.weekly.cta': 'Bắt đầu dùng thử',
    'home.pricing.threeMonth.title': 'Expert 3 Tháng',
    'home.pricing.threeMonth.price': '$59.99',
    'home.pricing.threeMonth.period': '/ 3 tháng',
    'home.pricing.threeMonth.savings': 'Tiết kiệm ~50% so với gói tuần',
    'home.pricing.threeMonth.badge': 'Tốt nhất',
    'home.pricing.threeMonth.cta': 'Chọn gói tốt nhất',
    'home.pricing.lifetime.title': 'Expert Trọn đời',
    'home.pricing.lifetime.price': '$149.99',
    'home.pricing.lifetime.period': 'một lần duy nhất',
    'home.pricing.lifetime.badge': 'Mua một lần',
    'home.pricing.lifetime.cta': 'Mua trọn đời',
    'home.pricing.expert.feat1': 'Phân tích AI không giới hạn',
    'home.pricing.expert.feat2': 'Không giới hạn Sparks hàng ngày',
    'home.pricing.expert.feat3': 'Xử lý AI ưu tiên',
    'home.pricing.expert.feat4': 'Tất cả tính năng tương lai',

    // Home - Differentiation
    'home.differentiation.badge': 'SỰ KHÁC BIỆT',
    'home.differentiation.title': 'Ngừng copy văn mẫu AI. Hẹn hò nghiêm túc cần chiến lược thật.',
    'home.differentiation.subtitle': 'Bạn đã thử Rizz hay Wingman và vẫn bị "ghost"? Đó là vì đối phương muốn hẹn hò với bạn, không phải với một cái máy.',
    'home.differentiation.card1.title': 'Các App Thông Thường',
    'home.differentiation.card1.step1': 'Xào nấu một câu thả thính rập khuôn từ trên mạng.',
    'home.differentiation.card1.step2': 'Bạn gửi đi lời văn sượng sùng, không giống con người bạn.',
    'home.differentiation.card1.step3': 'Đối phương tụt mood và im lặng (Ghosted).',
    'home.differentiation.card1.subtext': 'Hẹn hò chỉ bằng văn mẫu sẽ không bao giờ tạo kết nối sâu sắc.',
    'home.differentiation.card2.title': 'Đẳng Cấp Chuyên Gia TrueVibe',
    'home.differentiation.card2.step1': 'Thấu hiểu tính cách BẠN và soi chiếu "Red Flags" của đối phương.',
    'home.differentiation.card2.step2': 'Gợi ý chiến thuật dẫn dắt dựa trên giọng điệu thật của bạn.',
    'home.differentiation.card2.step3': 'Tự tin nhắn tin, câu chuyện có chiều sâu, chốt hẹn chất lượng.',
    'home.differentiation.card2.subtext': 'TrueVibe không nói hộ bạn. Chúng tôi coach để chính bạn thu hút nhất.',
    'home.differentiation.cta': 'Tự tin làm chủ cuộc trò chuyện ngay hôm nay',

    // About
    'about.title': 'Về TrueVibe',
    'about.description': 'Chúng tôi có sứ mệnh giúp những người tìm kiếm mối quan hệ nghiêm túc điều hướng việc hẹn hò hiện đại với sự tự tin và rõ ràng.',
    'about.mission.badge': 'Sứ mệnh của chúng tôi',
    'about.mission.title': 'Biến những kết nối ý nghĩa thành điều bình thường',
    'about.mission.text1': 'Các ứng dụng hẹn hò hiện đại thật áp đảo. Vuốt vô tận, tin nhắn không có hồi đáp, tín hiệu khó hiểu — quá trình này kiệt sức và thường chán nản. Chúng tôi xây dựng TrueVibe vì tin rằng mọi người đều xứng đáng có cơ hội công bằng để tìm thấy tình yêu thực sự.',
    'about.mission.text2': 'TrueVibe không phải là ứng dụng hẹn hò. Chúng tôi là người bạn huấn luyện đồng hành với các ứng dụng bạn đã sử dụng. AI của chúng tôi phân tích những gì thực sự hiệu quả — không chỉ là lời khuyên chung chung — và cung cấp hướng dẫn cá nhân hóa, có thể thực hiện được dựa trên tình huống và mục tiêu riêng của bạn.',
    'about.mission.text3': 'Chúng tôi được xây dựng cho những người tìm kiếm mối quan hệ nghiêm túc: những người đã chán lãng phí thời gian cho những cuộc match và cuộc trò chuyện tệ, và sẵn sàng hẹn hò có chủ ý và thông minh.',
    'about.values.badge': 'Giá trị của chúng tôi',
    'about.values.title': 'Những gì chúng tôi đại diện',
    'about.values.1.title': 'Tính xác thực trước tiên',
    'about.values.1.text': 'Chúng tôi giúp bạn thể hiện bản thân xác thực tốt nhất — không tạo ra nhân cách giả. Gợi ý AI của chúng tôi được xây dựng để giúp bạn giao tiếp chính xác hơn về con người thực của bạn.',
    'about.values.2.title': 'Quyền riêng tư theo thiết kế',
    'about.values.2.text': 'Cuộc sống hẹn hò của bạn rất riêng tư. Chúng tôi xử lý dữ liệu của bạn cực kỳ cẩn thận, không bao giờ bán dữ liệu, và cho bạn toàn quyền kiểm soát những gì bạn chia sẻ và những gì bị xóa.',
    'about.values.3.title': 'Lời khuyên dựa trên khoa học',
    'about.values.3.text': 'Các khuyến nghị của chúng tôi được đặt nền tảng trên tâm lý hành vi, khoa học quan hệ, và phân tích những gì thực sự thúc đẩy các match và kết nối thành công.',
    'about.values.4.title': 'Hòa nhập & Đa dạng',
    'about.values.4.text': 'TrueVibe phục vụ mọi người ở mọi khuynh hướng, hoàn cảnh và phong cách mối quan hệ. Lời khuyên kết nối tốt là phổ quát.',
    'about.team.badge': 'Đội ngũ',
    'about.team.title': 'Được xây dựng bởi những người hiểu bạn',
    'about.team.text': 'Chúng tôi là một nhóm nhỏ các kỹ sư, huấn luyện viên quan hệ và nhà nghiên cứu AI đã chán nhìn thấy những người thông minh, chân thành vật lộn trong bối cảnh hẹn hò hiện đại. Chúng tôi đã kết hợp chuyên môn của mình để xây dựng công cụ mà chúng tôi ước đã tồn tại khi còn độc thân.',
    'about.cta.title': 'Sẵn sàng hẹn hò thông minh hơn?',
    'about.cta.text': 'Tải TrueVibe và bắt đầu hành trình hướng đến những kết nối ý nghĩa.',
    'about.cta.button': 'Tải ngay',

    // Privacy - Vietnamese
    'privacy.title': 'Chính Sách Bảo Mật',
    'privacy.description': 'TrueVibe thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn như thế nào.',
    'privacy.lastUpdated': 'Cập nhật lần cuối: 6 tháng 4, 2026',
    'privacy.toc.title': 'Mục lục',
    'privacy.s1.title': '1. Giới thiệu',
    'privacy.s1.content': `TrueVibe ("chúng tôi" hoặc "của chúng tôi") cam kết bảo vệ quyền riêng tư của bạn. Chính Sách Bảo Mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin cá nhân của bạn khi bạn sử dụng ứng dụng di động TrueVibe và các dịch vụ liên quan (gọi chung là "Dịch vụ").

Vui lòng đọc kỹ Chính Sách Bảo Mật này. Bằng cách sử dụng Dịch vụ, bạn đồng ý với việc thu thập và sử dụng thông tin của bạn theo chính sách này.

Chính sách này áp dụng cho tất cả người dùng TrueVibe trên toàn thế giới.`,

    'privacy.s2.title': '2. Thông Tin Chúng Tôi Thu Thập',
    'privacy.s2.content': `Chúng tôi thu thập một số loại thông tin để cung cấp và cải thiện Dịch vụ:

**2.1 Thông tin bạn cung cấp trực tiếp**
- Dữ liệu ứng dụng lưu trữ cục bộ: Câu trả lời onboarding (mục tiêu hẹn hò, sở thích, loại mối quan hệ tìm kiếm, độ tuổi ưa thích, các nền tảng hẹn hò đang sử dụng), lịch sử phân tích và tùy chọn ứng dụng được lưu trữ cục bộ trên thiết bị của bạn. Dữ liệu này không rời thiết bị của bạn trừ khi bạn gửi để phân tích AI.
- Hình ảnh tải lên: Ảnh hồ sơ và ảnh chụp màn hình bạn tải lên để phân tích. Những hình ảnh này được xử lý bởi AI và không được lưu trữ vĩnh viễn sau khi kết quả phân tích được cung cấp.
- Nội dung hội thoại: Đoạn trích văn bản từ các cuộc trò chuyện bạn dán vào Chat Copilot.
- Liên lạc hỗ trợ: Tin nhắn hoặc email bạn gửi cho nhóm hỗ trợ của chúng tôi.

**2.2 Thông tin thu thập tự động**
- Thông tin thiết bị: Model thiết bị, phiên bản hệ điều hành, định danh thiết bị.
- Dữ liệu sử dụng: Tính năng bạn sử dụng, tần suất, thời gian phiên.
- Dữ liệu nhật ký: Địa chỉ IP, ngày giờ yêu cầu, lỗi ứng dụng.
- Lịch sử mua hàng: Hồ sơ mua Sparks và trạng thái đăng ký (chi tiết thanh toán được xử lý bởi Apple/Google và RevenueCat).

**2.3 Thông tin từ bên thứ ba**
- Firebase / Google: Chỉ dùng cho phân tích và báo cáo sự cố. Firebase không được sử dụng cho xác thực.
- RevenueCat: Quản lý đăng ký và xác minh mua hàng trong ứng dụng.
- Google Gemini API: Chúng tôi gửi ảnh hồ sơ, ảnh chụp màn hình hội thoại và câu trả lời onboarding của bạn đến Gemini API của Google để tạo ra các đầu ra huấn luyện AI. Xem Phần 10 để biết thêm chi tiết.`,

    'privacy.s3.title': '3. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn',
    'privacy.s3.content': `Chúng tôi sử dụng thông tin thu thập được cho các mục đích sau:

**3.1 Cung cấp Dịch vụ**
- Phân tích hồ sơ hẹn hò và tạo khuyến nghị cải thiện cá nhân hóa.
- Sàng lọc hồ sơ để tìm tín hiệu tương thích và dấu hiệu cảnh báo.
- Cung cấp huấn luyện hội thoại và gợi ý trả lời.
- Xử lý mua hàng đăng ký Expert.

**3.2 Cá nhân hóa**
- Điều chỉnh đầu ra huấn luyện AI theo mục tiêu hẹn hò của bạn.
- Ghi nhớ cài đặt và tùy chọn của bạn giữa các phiên.

**3.3 Cải thiện dịch vụ**
- Phân tích các mẫu sử dụng tổng hợp để cải thiện tính năng và mô hình AI.
- Xác định và sửa lỗi, sự cố và vấn đề hiệu suất.

**3.4 Truyền thông**
- Gửi thông báo giao dịch (biên lai mua hàng qua App Store/Google Play).
- Gửi thông báo dịch vụ và cập nhật chính sách quan trọng.
- Gửi thông báo khuyến mãi nếu bạn đã chọn tham gia (bạn có thể từ chối bất cứ lúc nào).

**3.5 Pháp lý & An toàn**
- Thực thi Điều Khoản Dịch Vụ và các chính sách khác của chúng tôi.
- Tuân thủ các luật, quy định và quy trình pháp lý áp dụng.
- Bảo vệ quyền, sự an toàn và bảo mật của TrueVibe, người dùng và cộng đồng.`,

    'privacy.s4.title': '4. Chia Sẻ Thông Tin Của Bạn',
    'privacy.s4.content': `Chúng tôi không bán, cho thuê hoặc giao dịch thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp hạn chế sau:

**4.1 Nhà cung cấp dịch vụ**
- Firebase / Google: Phân tích và báo cáo sự cố.
- Google Gemini: Xử lý mô hình AI.
- RevenueCat: Quản lý đăng ký và mua hàng.

**4.2 Chuyển giao kinh doanh**
Nếu TrueVibe tham gia vào việc sáp nhập hoặc mua lại, thông tin của bạn có thể được chuyển giao.

**4.3 Yêu cầu pháp lý**
Chúng tôi có thể tiết lộ thông tin nếu pháp luật yêu cầu.`,

    'privacy.s5.title': '5. Lưu Trữ Dữ Liệu',
    'privacy.s5.content': `TrueVibe sử dụng mô hình dữ liệu ưu tiên cục bộ. Hầu hết dữ liệu của bạn được lưu trữ trên thiết bị và không được truyền đến máy chủ của chúng tôi.

- Dữ liệu ứng dụng lưu trữ cục bộ trên thiết bị của bạn: Câu trả lời onboarding, tùy chọn và lịch sử phân tích được lưu trữ cục bộ trên thiết bị của bạn. Bạn có thể xóa tất cả dữ liệu cục bộ bất cứ lúc nào từ Cài đặt > Xóa Dữ Liệu. Gỡ cài đặt ứng dụng cũng xóa tất cả dữ liệu cục bộ.
- Hình ảnh tải lên: Được xử lý thoáng qua để cung cấp kết quả phân tích; không được lưu trữ trên máy chủ của chúng tôi sau khi phản hồi được cung cấp.
- Đoạn trích hội thoại: Được xử lý thoáng qua bởi AI; không được lưu trữ vĩnh viễn trên máy chủ của chúng tôi sau khi phản hồi được cung cấp.
- Hồ sơ mua hàng: Được lưu trữ tối đa 7 năm để tuân thủ nghĩa vụ kế toán và thuế (quản lý qua RevenueCat và tài khoản App Store/Google Play của bạn).
- Dữ liệu nhật ký: Được lưu trữ tối đa 12 tháng cho mục đích bảo mật và gỡ lỗi.

Bạn có thể xóa tất cả dữ liệu ứng dụng lưu trữ cục bộ bất cứ lúc nào từ Cài đặt > Xóa Dữ Liệu trong ứng dụng. Xem Phần 7 để biết thêm quyền.`,

    'privacy.s6.title': '6. Bảo Mật',
    'privacy.s6.content': `Chúng tôi thực hiện các biện pháp bảo mật kỹ thuật và tổ chức theo tiêu chuẩn ngành để bảo vệ thông tin cá nhân của bạn:

- Mã hóa dữ liệu trong transit sử dụng TLS/HTTPS.
- Mã hóa dữ liệu nhạy cảm khi lưu trữ.
- Kiểm soát truy cập hạn chế quyền truy cập của nhân viên.
- Kiểm tra bảo mật thường xuyên.

Tuy nhiên, không có phương thức truyền tải nào qua internet là 100% an toàn.`,

    'privacy.s7.title': '7. Quyền Của Bạn',
    'privacy.s7.content': `Tùy thuộc vào vị trí của bạn, bạn có thể có các quyền sau:

**7.1 Quyền cho tất cả người dùng**
- Truy cập: Yêu cầu bản sao thông tin cá nhân chúng tôi lưu giữ.
- Chỉnh sửa: Yêu cầu sửa thông tin không chính xác.
- Xóa: Yêu cầu xóa thông tin cá nhân. Bạn có thể xóa tất cả dữ liệu lưu trữ cục bộ từ Cài đặt > Xóa Dữ Liệu trong ứng dụng.
- Tính di động: Yêu cầu dữ liệu ở định dạng có thể đọc được bằng máy.

**7.2 Cư dân California (CCPA/CPRA)**
Cư dân California có các quyền bổ sung theo Đạo luật Quyền riêng tư Người tiêu dùng California.

**7.3 Cư dân EU/EEA (GDPR)**
Cư dân EU/EEA có các quyền theo Quy định Bảo vệ Dữ liệu Chung.

Để thực hiện bất kỳ quyền bảo mật nào, hãy gửi email cho chúng tôi tại support.truevibe@easier.today.`,

    'privacy.s8.title': '8. Quyền Riêng Tư Của Trẻ Em',
    'privacy.s8.content': `TrueVibe không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố tình thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi. Người dùng từ 13 đến 17 tuổi chỉ có thể sử dụng Dịch vụ với sự đồng ý của cha mẹ hoặc người giám hộ.`,

    'privacy.s9.title': '9. Mua Hàng Trong Ứng Dụng & Đăng Ký',
    'privacy.s9.content': `TrueVibe cung cấp gói miễn phí (3 Sparks/ngày) và gói đăng ký Expert (Tuần, 3 Tháng, Trọn đời) cho phép truy cập không giới hạn.

**Xử lý thanh toán**
Tất cả giao dịch thanh toán được xử lý bởi Apple (App Store) hoặc Google (Google Play). Chúng tôi không trực tiếp thu thập hoặc lưu trữ thông tin thẻ tín dụng của bạn. RevenueCat đóng vai trò trung gian để xác minh và quản lý trạng thái đăng ký.

**Dữ liệu liên quan đến mua hàng**
Chúng tôi nhận và lưu trữ: định danh giao dịch, dấu thời gian mua hàng, sản phẩm đã mua và trạng thái đăng ký. Thông tin này được sử dụng để mở khóa tính năng Expert và duy trì trạng thái đăng ký của bạn trên thiết bị.

**Tự động gia hạn đăng ký**
Đăng ký Expert Tuần và 3 Tháng tự động gia hạn trừ khi được hủy ít nhất 24 giờ trước khi kết thúc kỳ thanh toán hiện tại. Gói Trọn đời là mua một lần, không có hóa đơn định kỳ. Bạn có thể quản lý hoặc hủy đăng ký thông qua cài đặt App Store hoặc Google Play của thiết bị.`,

    'privacy.s10.title': '10. Thông Báo Xử Lý AI',
    'privacy.s10.content': `TrueVibe sử dụng trí tuệ nhân tạo để tạo ra các thông tin huấn luyện cá nhân hóa. Phần này giải thích đầy đủ cách nội dung của bạn được xử lý, tuân thủ hướng dẫn của Apple App Store 5.1.1(i) và 5.1.2(i).

**Bên xử lý AI bên thứ ba**
Các tính năng AI trong TrueVibe được cung cấp bởi **Google Gemini (Vertex AI — Google Cloud)**. Google là bên thứ ba được nêu tên nhận và xử lý dữ liệu được mô tả bên dưới.

**Những gì chúng tôi gửi đến AI**
Khi bạn sử dụng một tính năng AI, dữ liệu sau đây được truyền đến Google Gemini (Vertex AI — Google Cloud) để tạo ra kết quả huấn luyện của bạn:
- Câu trả lời onboarding của bạn (tuổi, giới tính và tình huống hẹn hò hiện tại) để cung cấp ngữ cảnh cá nhân hóa.
- Ảnh hồ sơ hẹn hò của bạn (cho Nâng cấp hồ sơ).
- Ảnh của những người bạn quan tâm, tải lên từ hồ sơ hẹn hò của họ (cho Kiểm tra Vibe).
- Ảnh chụp màn hình cuộc trò chuyện hẹn hò (cho Chat Copilot).

**Đồng ý của người dùng trước khi gửi dữ liệu**
TrueVibe lấy sự đồng ý rõ ràng của bạn trước khi bất kỳ dữ liệu cá nhân nào được truyền đến Google Gemini. Một hộp thoại đồng ý trong ứng dụng được hiển thị lần đầu tiên bạn sử dụng tính năng AI, giải thích rõ ràng dữ liệu nào sẽ được gửi và đến ai. Không có dữ liệu nào được truyền đến bất kỳ hệ thống AI nào cho đến khi bạn đã xác nhận sự đồng ý của mình.

**Cách Google xử lý dữ liệu của bạn**
Theo Cam kết Bảo mật AI/ML của Google Cloud, Google không sử dụng dữ liệu được gửi qua API Vertex AI / Gemini để đào tạo, cải thiện hoặc tinh chỉnh các mô hình AI của mình. Dữ liệu của bạn chỉ được xử lý để tạo ra phản hồi cho phiên của bạn và không được Google lưu giữ lâu dài sau khi quá trình xử lý hoàn tất.

**Không có đánh giá của con người**
Nhóm của chúng tôi không đọc tin nhắn riêng tư hoặc nội dung hồ sơ cá nhân của bạn. Xử lý AI hoàn toàn tự động. Nhóm hỗ trợ của chúng tôi không thể truy cập dữ liệu cá nhân của bạn vì dữ liệu được lưu trữ cục bộ trên thiết bị của bạn.

**Giảm thiểu dữ liệu**
Chúng tôi chỉ gửi những gì cần thiết để tạo ra đầu ra huấn luyện của bạn. Chúng tôi không bao gồm các định danh cá nhân không cần thiết khi gửi dữ liệu đến Google Gemini.

**Quyền kiểm soát của bạn**
Bạn kiểm soát những gì bạn chia sẻ với TrueVibe. Bạn không bao giờ bắt buộc phải tải lên nội dung hội thoại riêng tư hoặc ảnh. Tất cả các tính năng phân tích AI đều là tùy chọn theo thiết kế. Bạn có thể rút lại sự đồng ý bất cứ lúc nào bằng cách ngừng sử dụng các tính năng AI.`,

    'privacy.s11.title': '11. Thay Đổi Chính Sách Này',
    'privacy.s11.content': `Chúng tôi có thể cập nhật Chính Sách Bảo Mật này theo thời gian. Khi chúng tôi thực hiện các thay đổi quan trọng, chúng tôi sẽ:

- Cập nhật ngày "Cập nhật lần cuối" ở đầu chính sách này.
- Gửi thông báo trong ứng dụng cho người dùng.
- Trong một số trường hợp, yêu cầu sự đồng ý mới của bạn nếu pháp luật yêu cầu.

Việc tiếp tục sử dụng Dịch vụ sau khi các thay đổi có hiệu lực cấu thành sự chấp nhận Chính Sách Bảo Mật đã sửa đổi của bạn.`,

    'privacy.s12.title': '12. Liên Hệ Chúng Tôi',
    'privacy.s12.content': `Nếu bạn có câu hỏi về Chính Sách Bảo Mật này, vui lòng liên hệ:

Email: support.truevibe@easier.today
Chủ đề: Yêu cầu Quyền riêng tư`,

    // Terms - Vietnamese
    'terms.title': 'Điều Khoản Dịch Vụ',
    'terms.description': 'Vui lòng đọc kỹ các điều khoản này trước khi sử dụng TrueVibe.',
    'terms.lastUpdated': 'Cập nhật lần cuối: 6 tháng 4, 2026',
    'terms.toc.title': 'Mục lục',
    'terms.s1.title': '1. Chấp Nhận Điều Khoản',
    'terms.s1.content': `Các Điều Khoản Dịch Vụ này ("Điều Khoản") tạo thành thỏa thuận ràng buộc pháp lý giữa bạn ("Người dùng") và TrueVibe ("Công ty") điều chỉnh quyền truy cập và sử dụng ứng dụng di động TrueVibe và tất cả các dịch vụ liên quan.

BẰNG CÁCH TẢI XUỐNG, CÀI ĐẶT, TRUY CẬP HOẶC SỬ DỤNG DỊCH VỤ, BẠN THỪA NHẬN RẰNG BẠN ĐÃ ĐỌC, HIỂU VÀ ĐỒNG Ý BỊ RÀNG BUỘC BỞI CÁC ĐIỀU KHOẢN NÀY.`,

    'terms.s2.title': '2. Mô Tả Dịch Vụ',
    'terms.s2.content': `TrueVibe là ứng dụng đồng hành hẹn hò được hỗ trợ bởi AI được thiết kế để giúp người dùng cải thiện hồ sơ hẹn hò, sàng lọc người phù hợp tiềm năng và cải thiện các cuộc trò chuyện hẹn hò.

**TrueVibe LÀ:**
- Công cụ huấn luyện cá nhân hoạt động song song với các nền tảng hẹn hò hiện có.
- Dịch vụ phân tích dựa trên AI cung cấp các khuyến nghị cá nhân hóa.

**TrueVibe KHÔNG PHẢI LÀ:**
- Nền tảng hẹn hò hay dịch vụ mai mối.
- Sự đảm bảo về thành công trong tình yêu.
- Thay thế cho tư vấn tâm lý hoặc quan hệ chuyên nghiệp.`,

    'terms.s3.title': '3. Điều Kiện',
    'terms.s3.content': `Để sử dụng TrueVibe, bạn phải đáp ứng các yêu cầu sau:

**Yêu cầu độ tuổi**
- Bạn phải ít nhất 18 tuổi để sử dụng Dịch vụ độc lập.
- Người dùng từ 13 đến 17 tuổi chỉ có thể sử dụng với sự đồng ý có thể xác minh của cha mẹ hoặc người giám hộ hợp pháp. Bằng cách sử dụng Dịch vụ với tư cách là vị thành niên (13–17), bạn xác nhận rằng cha mẹ hoặc người giám hộ của bạn đã xem xét và đồng ý với các Điều Khoản này thay mặt bạn.
- Dịch vụ không dành cho bất kỳ ai dưới 13 tuổi.

**Tính khả dụng theo khu vực địa lý**
- Dịch vụ có sẵn tại các khu vực pháp lý nơi nó chưa bị hạn chế hoặc cấm bởi luật áp dụng. Bạn có trách nhiệm đảm bảo tuân thủ luật địa phương trước khi sử dụng Dịch vụ.

Bằng cách sử dụng Dịch vụ, bạn cam đoan và bảo đảm rằng bạn đáp ứng tất cả các yêu cầu điều kiện.`,

    'terms.s4.title': '4. Trách Nhiệm Người Dùng',
    'terms.s4.content': `**4.1 Dữ liệu cục bộ**
Tất cả dữ liệu của bạn (câu trả lời onboarding, lịch sử phân tích, tùy chọn) được lưu trữ cục bộ trên thiết bị của bạn. Bạn chịu trách nhiệm về bảo mật thiết bị của mình.

**4.2 Thông tin chính xác**
Bạn đồng ý cung cấp thông tin chính xác khi sử dụng các tính năng onboarding và phân tích của ứng dụng để nhận được huấn luyện phù hợp.

**4.3 Nội dung bạn gửi**
Bạn chịu trách nhiệm về bất kỳ ảnh hồ sơ, đoạn trích hội thoại hoặc thông tin hồ sơ match mà bạn gửi để phân tích.

**4.4 Xóa dữ liệu**
Bạn có thể xóa tất cả dữ liệu ứng dụng lưu trữ cục bộ bất cứ lúc nào thông qua Cài đặt > Xóa Dữ Liệu. Gỡ cài đặt ứng dụng cũng xóa tất cả dữ liệu cục bộ.`,

    'terms.s5.title': '5. Sử Dụng Được Phép & Hành Vi Bị Cấm',
    'terms.s5.content': `Bạn đồng ý chỉ sử dụng TrueVibe cho các mục đích hợp pháp. Các hành vi sau đây bị nghiêm cấm:

**5.1 Nội dung bị cấm**
- Tải lên hình ảnh hoặc nội dung mô tả trẻ vị thành niên trong bất kỳ bối cảnh lãng mạn nào.
- Tải lên nội dung khiêu dâm hoặc kích dục.
- Tải lên nội dung thúc đẩy bạo lực hoặc phát ngôn thù địch.

**5.2 Hành vi bị cấm**
- Sử dụng Dịch vụ để quấy rối, theo dõi hoặc đe dọa bất kỳ cá nhân nào.
- Sử dụng đầu ra huấn luyện AI để lừa đảo hoặc thao túng người khác.
- Cố gắng đảo ngược kỹ thuật hoặc trích xuất mã nguồn từ ứng dụng.
- Sử dụng các công cụ tự động (bot, scraper) để truy cập hoặc trích xuất dữ liệu từ Dịch vụ.
- Vượt qua hệ thống thanh toán, bao gồm truy cập trái phép vào các tính năng cao cấp.
- Chia sẻ hoặc bán lại quyền truy cập vào các tính năng cao cấp.

**5.3 Sử dụng bị cấm đối với tính năng AI**
- Sử dụng nội dung do AI tạo ra để mạo danh người khác.
- Sử dụng huấn luyện AI để tạo điều kiện hoặc cho phép các hoạt động bất hợp pháp.
- Cố gắng thao túng hoặc "bẻ khóa" các hệ thống AI của chúng tôi để tạo ra nội dung bị cấm.

**5.4 Hậu quả**
Vi phạm Điều này có thể dẫn đến việc chấm dứt ngay lập tức quyền sử dụng Dịch vụ của bạn, mất Sparks chưa sử dụng và thời gian đăng ký, và hành động pháp lý tiềm năng khi áp dụng.`,

    'terms.s6.title': '6. Đăng Ký, Sparks & Thanh Toán',
    'terms.s6.content': `**6.1 Gói miễn phí**
TrueVibe cung cấp gói miễn phí nhận 3 Sparks mỗi ngày. Sparks được nạp lại hàng ngày và không thể tích lũy. Người dùng miễn phí có quyền truy cập tất cả ba tính năng cốt lõi (Nâng cấp hồ sơ, Kiểm tra Vibe, Chat Copilot) trong giới hạn Sparks hàng ngày.

**6.2 Sparks (Tín dụng hàng ngày)**
Sparks là hệ thống tín dụng trong ứng dụng để truy cập các tính năng AI. Các điều khoản chính:
- Người dùng miễn phí nhận 3 Sparks mỗi ngày, được nạp lại vào nửa đêm theo giờ địa phương.
- Sparks không có giá trị tiền mặt và không thể mua dưới dạng tiêu dùng.
- Sparks không thể chuyển nhượng và gắn với thiết bị của bạn.
- Sparks hàng ngày chưa sử dụng không được chuyển sang ngày hôm sau.

**6.3 Đăng ký Expert**
Đăng ký Expert cung cấp quyền truy cập Sparks không giới hạn (không có giới hạn hàng ngày). Các gói có sẵn:
- Expert Tuần: $9.99/tuần (có thể áp dụng ưu đãi giới thiệu $2.99 cho tuần đầu).
- Expert 3 Tháng: $59.99 mỗi 3 tháng.
- Expert Trọn đời: $149.99 mua một lần (không có hóa đơn định kỳ).

Điều khoản đăng ký:
- Đăng ký định kỳ (Tuần, 3 Tháng) được tính phí trước cho kỳ đăng ký.
- Thanh toán được tính vào tài khoản Apple/Google của bạn khi xác nhận mua.
- Đăng ký định kỳ tự động gia hạn trừ khi hủy ít nhất 24 giờ trước khi kết thúc kỳ hiện tại.
- Bạn có thể quản lý và hủy đăng ký thông qua cài đặt đăng ký của thiết bị (App Store hoặc Google Play).
- Truy cập Trọn đời là mua một lần, không có hóa đơn định kỳ.

**6.4 Thay đổi giá**
Chúng tôi bảo lưu quyền thay đổi giá đăng ký với thông báo hợp lý. Thay đổi giá sẽ có hiệu lực vào đầu chu kỳ thanh toán tiếp theo của bạn.

**6.5 Chính sách hoàn tiền**
Tất cả các giao dịch mua là chính thức. Yêu cầu hoàn tiền phải được gửi qua nền tảng tương ứng (Apple hoặc Google). Chúng tôi không xử lý hoàn tiền trực tiếp.`,

    'terms.s7.title': '7. Tuyên Bố Từ Chối Về Nội Dung AI',
    'terms.s7.content': `TrueVibe sử dụng trí tuệ nhân tạo để tạo ra các thông tin, gợi ý và khuyến nghị huấn luyện cá nhân hóa.

**7.1 Tính chất đầu ra AI**
- Nội dung do AI tạo ra được tạo ra bởi các hệ thống tự động.
- Các gợi ý mang tính xác suất và không đảm bảo kết quả cụ thể.

**7.2 Không phải đảm bảo kết quả**
TrueVibe không đảm bảo rằng việc làm theo gợi ý của chúng tôi sẽ dẫn đến nhiều match hơn, cuộc hẹn hơn hay bất kỳ kết quả lãng mạn cụ thể nào.

**7.3 Không phải lời khuyên chuyên nghiệp**
Đầu ra huấn luyện AI không thay thế cho lời khuyên tâm lý, trị liệu hoặc quan hệ chuyên nghiệp.`,

    'terms.s8.title': '8. Sở Hữu Trí Tuệ',
    'terms.s8.content': `**8.1 Tài sản của chúng tôi**
Dịch vụ, bao gồm nội dung gốc, tính năng, chức năng, thiết kế, phần mềm, thuật toán, logo và thương hiệu, thuộc sở hữu của TrueVibe và các bên cấp phép của nó và được bảo vệ bởi luật sở hữu trí tuệ. Bạn không được sao chép, sửa đổi, phân phối, bán hoặc cho thuê bất kỳ phần nào của Dịch vụ mà không có sự cho phép bằng văn bản rõ ràng của chúng tôi.

**8.2 Nội dung của bạn**
Bạn giữ quyền sở hữu nội dung bạn tải lên Dịch vụ (ảnh, văn bản, đoạn trích hội thoại). Bằng cách tải lên nội dung, bạn cấp cho TrueVibe giấy phép hạn chế, không độc quyền, miễn phí bản quyền để xử lý và phân tích nội dung đó chỉ nhằm mục đích cung cấp Dịch vụ cho bạn. Giấy phép này chấm dứt khi bạn xóa nội dung khỏi ứng dụng.

**8.3 Phản hồi**
Nếu bạn gửi phản hồi, gợi ý hoặc ý tưởng về Dịch vụ, bạn cấp cho chúng tôi quyền không hạn chế, miễn phí bản quyền để sử dụng phản hồi đó cho bất kỳ mục đích nào.

**8.4 Đầu ra AI**
Nội dung huấn luyện do AI tạo ra cho bạn thông qua Dịch vụ được cung cấp cho mục đích sử dụng cá nhân của bạn. Bạn không được bán lại, phân phối lại hoặc thương mại hóa đầu ra do AI tạo ra từ TrueVibe.`,

    'terms.s9.title': '9. Quyền Riêng Tư',
    'terms.s9.content': `Quyền riêng tư của bạn rất quan trọng với chúng tôi. Chính Sách Bảo Mật của chúng tôi giải thích cách chúng tôi thu thập, sử dụng và chia sẻ thông tin về bạn khi bạn sử dụng Dịch vụ.

Chính Sách Bảo Mật được tích hợp vào các Điều Khoản này bằng cách tham chiếu. Vui lòng xem lại Chính Sách Bảo Mật tại truevibe.easier.today/privacy.`,

    'terms.s10.title': '10. Từ Chối Bảo Hành',
    'terms.s10.content': `DỊCH VỤ ĐƯỢC CUNG CẤP TRÊN CƠ SỞ "NGUYÊN TRẠNG" VÀ "KHI CÓ SẴN" MÀ KHÔNG CÓ BẢO ĐẢM DƯỚI BẤT KỲ HÌNH THỨC NÀO. TRUEVIBE TỪ CHỐI TẤT CẢ BẢO ĐẢM BAO GỒM BẢO ĐẢM NGỤ Ý VỀ KHẢ NĂNG BÁN ĐƯỢC, PHÙ HỢP CHO MỤC ĐÍCH CỤ THỂ VÀ KHÔNG VI PHẠM.`,

    'terms.s11.title': '11. Giới Hạn Trách Nhiệm',
    'terms.s11.content': `TRONG PHẠM VI TỐI ĐA ĐƯỢC LUẬT ÁP DỤNG CHO PHÉP, TRUEVIBE SẼ KHÔNG CHỊU TRÁCH NHIỆM VỀ BẤT KỲ THIỆT HẠI GIÁN TIẾP, NGẪU NHIÊN, ĐẶC BIỆT, DO HẬU QUẢ HOẶC TRỪNG PHẠT NÀO.

TỔNG TRÁCH NHIỆM CỦA TRUEVIBE ĐỐI VỚI BẠN SẼ KHÔNG VƯỢT QUÁ SỐ TIỀN CAO HƠN TRONG: (A) SỐ TIỀN BẠN ĐÃ THANH TOÁN CHO TRUEVIBE TRONG 12 THÁNG TRƯỚC, HOẶC (B) MỘT TRĂM ĐÔ LA MỸ ($100).`,

    'terms.s12.title': '12. Bồi Thường',
    'terms.s12.content': `Bạn đồng ý bồi thường, bảo vệ và giữ TrueVibe và các cán bộ, giám đốc, nhân viên, đại lý của nó vô hại khỏi bất kỳ khiếu nại, trách nhiệm pháp lý, thiệt hại phát sinh từ: vi phạm Điều Khoản của bạn, việc sử dụng Dịch vụ của bạn, hoặc vi phạm quyền của bên thứ ba.`,

    'terms.s13.title': '13. Luật Điều Chỉnh & Giải Quyết Tranh Chấp',
    'terms.s13.content': `**13.1 Luật điều chỉnh**
Các Điều Khoản này được điều chỉnh theo luật pháp của Tiểu bang California, Hoa Kỳ.

**13.2 Thỏa thuận trọng tài**
Bất kỳ tranh chấp nào phát sinh từ hoặc liên quan đến các Điều Khoản này sẽ được giải quyết bằng trọng tài cá nhân ràng buộc được quản lý bởi Hiệp hội Trọng tài Hoa Kỳ (AAA).

**13.3 Địa điểm**
Đối với các vấn đề không thuộc trọng tài, bạn đồng ý với thẩm quyền riêng biệt của các tòa án tiểu bang và liên bang tại Quận Santa Clara, California.`,

    'terms.s14.title': '14. Thay Đổi Điều Khoản',
    'terms.s14.content': `Chúng tôi bảo lưu quyền sửa đổi các Điều Khoản này bất cứ lúc nào. Khi chúng tôi thực hiện các thay đổi quan trọng, chúng tôi sẽ:

- Cập nhật ngày "Cập nhật lần cuối" ở đầu các Điều Khoản này.
- Cung cấp thông báo nổi bật trong ứng dụng về các thay đổi đáng kể.
- Khi pháp luật yêu cầu, tìm kiếm sự đồng ý rõ ràng của bạn đối với các Điều Khoản đã sửa đổi.

Việc tiếp tục sử dụng Dịch vụ sau ngày có hiệu lực của bất kỳ thay đổi nào cấu thành sự chấp nhận ràng buộc của bạn đối với các Điều Khoản đã sửa đổi. Nếu bạn không đồng ý với các Điều Khoản đã sửa đổi, bạn phải ngừng sử dụng Dịch vụ và có thể gỡ cài đặt ứng dụng.

Chúng tôi khuyên bạn nên xem lại các Điều Khoản này định kỳ. Các thay đổi quan trọng sẽ không áp dụng hồi tố đối với các tranh chấp phát sinh trước ngày thay đổi.`,

    'terms.s15.title': '15. Liên Hệ & Các Điều Khoản Khác',
    'terms.s15.content': `**15.1 Liên hệ**
Đối với câu hỏi về Điều Khoản Dịch Vụ này, vui lòng liên hệ:

Email: support.truevibe@easier.today
Chủ đề: Yêu cầu Điều Khoản Dịch Vụ

**15.2 Toàn bộ thỏa thuận**
Các Điều Khoản này, cùng với Chính Sách Bảo Mật của chúng tôi, cấu thành toàn bộ thỏa thuận giữa bạn và TrueVibe.

**15.3 Khả năng tách biệt**
Nếu bất kỳ điều khoản nào được tìm thấy không thể thực thi, các điều khoản còn lại sẽ vẫn có hiệu lực đầy đủ.`,

    // Support - Vietnamese
    'support.title': 'Trung Tâm Hỗ Trợ',
    'support.description': 'Chúng tôi ở đây để giúp đỡ. Tìm câu trả lời cho các câu hỏi thường gặp hoặc liên hệ trực tiếp.',
    'support.faq.badge': 'Câu hỏi thường gặp',
    'support.faq.title': 'Các Câu Hỏi Thường Gặp',
    'support.faq.q1': 'TrueVibe là gì và hoạt động như thế nào?',
    'support.faq.a1': 'TrueVibe là ứng dụng đồng hành hẹn hò AI hoạt động song song với Tinder, Bumble và Hinge. Ba tính năng cốt lõi: Nâng cấp hồ sơ (phân tích ảnh + kế hoạch hành động có điểm số), Kiểm tra Vibe (tải lên tối đa 8 ảnh để nhận hồ sơ AI đầy đủ với điểm tương thích và câu mở đầu), và Chat Copilot (chụp màn hình trò chuyện để nhận gợi ý trả lời kèm lý giải tâm lý). Người dùng miễn phí nhận 3 phân tích AI mỗi ngày. Nâng cấp lên Expert để không giới hạn.',
    'support.faq.q2': 'Sparks là gì và gói miễn phí hoạt động như thế nào?',
    'support.faq.a2': 'Sparks là hệ thống tín dụng trong ứng dụng cho các phân tích AI. Người dùng miễn phí nhận 3 Sparks mỗi ngày — đủ cho 3 phân tích đầy đủ (Nâng cấp hồ sơ, Kiểm tra Vibe hoặc Chat Copilot). Sparks được nạp lại hàng ngày. Để mở khóa phân tích không giới hạn, hãy nâng cấp lên gói Expert (Tuần, 3 Tháng hoặc Trọn đời).',
    'support.faq.q3': 'Dữ liệu cuộc trò chuyện hẹn hò của tôi có riêng tư không?',
    'support.faq.a3': 'Có, hoàn toàn. Ảnh chụp màn hình bạn gửi vào Chat Copilot được xử lý bởi AI và không được lưu trữ vĩnh viễn trên máy chủ của chúng tôi sau khi phản hồi được gửi. Nhóm của chúng tôi không xem tin nhắn riêng tư của bạn. Tất cả xử lý dữ liệu diễn ra qua kết nối được mã hóa.',
    'support.faq.q4': 'Làm thế nào để hủy đăng ký Expert?',
    'support.faq.a4': 'Bạn có thể hủy đăng ký Expert bất cứ lúc nào thông qua cài đặt đăng ký của thiết bị. Trên iPhone/iPad: Vào Cài đặt > Apple ID > Đăng ký > TrueVibe Expert > Hủy đăng ký. Trên Android: Mở Google Play > nhấn biểu tượng hồ sơ > Thanh toán & đăng ký > Đăng ký > TrueVibe > Hủy. Việc hủy có hiệu lực vào cuối kỳ thanh toán hiện tại.',
    'support.faq.q5': 'Tôi có thể hoàn tiền cho đăng ký không?',
    'support.faq.a5': 'Đối với yêu cầu hoàn tiền đăng ký, vui lòng liên hệ trực tiếp Apple (App Store) hoặc Google (Google Play), vì tất cả các khoản thanh toán được xử lý qua các nền tảng đó. Chúng tôi không xử lý hoàn tiền trực tiếp. Quyết định hoàn tiền thuộc quyền của Apple hoặc Google.',
    'support.faq.q6': 'TrueVibe có hoạt động cho mọi xu hướng tình dục và loại mối quan hệ không?',
    'support.faq.a6': 'Có! TrueVibe được thiết kế hoàn toàn để giúp tất cả người dùng bất kể xu hướng tình dục, giới tính hoặc phong cách mối quan hệ.',
    'support.faq.q7': 'Làm thế nào để xóa dữ liệu hoặc đặt lại ứng dụng?',
    'support.faq.a7': 'TrueVibe lưu trữ toàn bộ dữ liệu của bạn ngay trên thiết bị — không có tài khoản hay dữ liệu trên máy chủ. Để xóa dữ liệu, vào Cài đặt > Xóa dữ liệu > Xác nhận. Thao tác này xóa vĩnh viễn tất cả dữ liệu local bao gồm hồ sơ onboarding và lịch sử phân tích. Bạn cũng có thể gỡ cài đặt ứng dụng để xóa toàn bộ dữ liệu. Nếu cần thêm hỗ trợ, hãy email chúng tôi tại support.truevibe@easier.today.',
    'support.faq.q8': 'Ứng dụng không hoạt động đúng. Tôi phải làm gì?',
    'support.faq.a8': 'Trước tiên, hãy thử đóng và mở lại ứng dụng. Nếu vấn đề vẫn còn, hãy thử: (1) Kiểm tra kết nối internet; (2) Cập nhật lên phiên bản mới nhất của TrueVibe; (3) Khởi động lại thiết bị; (4) Gỡ cài đặt và cài đặt lại ứng dụng (dữ liệu local sẽ bị xóa khi cài lại). Nếu không có bước nào giúp ích, vui lòng liên hệ chúng tôi tại support.truevibe@easier.today.',
    'support.contact.badge': 'Liên hệ',
    'support.contact.title': 'Liên Hệ Hỗ Trợ',
    'support.contact.subtitle': 'Không tìm thấy những gì bạn cần? Gửi tin nhắn cho chúng tôi và chúng tôi sẽ phản hồi trong vòng 24 giờ.',
    'support.contact.name': 'Tên của bạn',
    'support.contact.email': 'Email của bạn',
    'support.contact.subject': 'Chủ đề',
    'support.contact.message': 'Tin nhắn',
    'support.contact.messagePlaceholder': 'Mô tả vấn đề hoặc câu hỏi của bạn chi tiết...',
    'support.contact.send': 'Gửi tin nhắn',
    'support.contact.emailDirect': 'Hoặc gửi email trực tiếp đến',
    'support.contact.response': 'Chúng tôi thường phản hồi trong vòng 24 giờ vào ngày làm việc.',

    // Delete Data - Vietnamese
    'delete.title': 'Xóa Dữ Liệu Của Bạn',
    'delete.description': 'Hướng dẫn xóa toàn bộ dữ liệu TrueVibe được lưu trên thiết bị của bạn.',
    'delete.intro': 'TrueVibe không có tài khoản và không có dữ liệu trên máy chủ — toàn bộ dữ liệu của bạn chỉ được lưu cục bộ trên thiết bị. Việc xóa diễn ra tức thì và vĩnh viễn.',
    'delete.warning': 'Cảnh báo: Hành động này không thể hoàn tác',
    'delete.warningText': 'Sau khi xóa, toàn bộ dữ liệu cục bộ — bao gồm hồ sơ onboarding và lịch sử phân tích — sẽ bị xóa vĩnh viễn khỏi thiết bị này.',
    'delete.method1.title': 'Cách 1: Xóa trong ứng dụng (Khuyến nghị)',
    'delete.method1.step1': 'Mở ứng dụng TrueVibe trên thiết bị của bạn.',
    'delete.method1.step2': 'Chuyển đến tab More (thanh điều hướng dưới cùng).',
    'delete.method1.step3': 'Nhấn vào "Cài đặt".',
    'delete.method1.step4': 'Nhấn "Xóa dữ liệu" và xác nhận.',
    'delete.method1.step5': 'Toàn bộ dữ liệu cục bộ sẽ được xóa ngay lập tức và vĩnh viễn. Ứng dụng sẽ quay về màn hình onboarding.',
    'delete.method2.title': 'Cách 2: Gỡ cài đặt ứng dụng',
    'delete.method2.text': 'Gỡ cài đặt TrueVibe sẽ xóa toàn bộ dữ liệu cục bộ khỏi thiết bị:',
    'delete.method2.step1': 'Trên iPhone/iPad: Nhấn giữ biểu tượng TrueVibe > Xóa ứng dụng > Xóa.',
    'delete.method2.step2': 'Trên Android: Nhấn giữ biểu tượng TrueVibe > Gỡ cài đặt > OK.',
    'delete.method2.step3': 'Tất cả dữ liệu cục bộ sẽ bị xóa khi gỡ cài đặt.',
    'delete.method2.step4': 'Lưu ý: Gỡ cài đặt không hủy đăng ký Expert đang hoạt động. Hãy quản lý đăng ký riêng trong cài đặt App Store hoặc Google Play.',
    'delete.dataInfo.title': 'Những Gì Sẽ Bị Xóa',
    'delete.dataInfo.text': 'Khi bạn xóa dữ liệu hoặc gỡ cài đặt ứng dụng:',
    'delete.dataInfo.1': 'Hồ sơ onboarding và toàn bộ tùy chọn bị xóa ngay lập tức.',
    'delete.dataInfo.2': 'Toàn bộ lịch sử phân tích (Nâng cấp hồ sơ, Kiểm tra Vibe, Chat Copilot) bị xóa vĩnh viễn.',
    'delete.dataInfo.3': 'Không có tài khoản server-side để xóa — dữ liệu của bạn chưa bao giờ rời khỏi thiết bị.',
    'delete.dataInfo.4': 'Trạng thái đăng ký Expert do Apple/Google quản lý và không bị ảnh hưởng khi xóa dữ liệu ứng dụng.',
    'delete.contact': 'Cần hỗ trợ hoặc muốn phản hồi? Liên hệ chúng tôi tại support.truevibe@easier.today',
  }
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('datewise-lang') as Lang | null
    if (saved === 'en' || saved === 'vi') {
      setLang(saved)
    }
  }, [])

  const toggleLang = () => {
    const next: Lang = lang === 'en' ? 'vi' : 'en'
    setLang(next)
    localStorage.setItem('datewise-lang', next)
  }

  const t = (key: string): string => {
    const dict = translations[lang] as Record<string, string>
    return dict[key] ?? key
  }

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
