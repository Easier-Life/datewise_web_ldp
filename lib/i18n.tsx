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
    'footer.copyright': '© 2025 DateWise. All rights reserved.',
    'footer.features': 'Features',
    'footer.howItWorks': 'How It Works',
    'footer.pricing': 'Pricing',
    'footer.about': 'About Us',
    'footer.support': 'Support',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Home - Hero
    'home.hero.badge': 'AI-Powered Dating Coach',
    'home.hero.title': 'Date Smarter, Connect Deeper',
    'home.hero.subtitle': 'DateWise is your intelligent companion that runs alongside Tinder, Bumble, and Hinge — optimizing your profile, screening matches, and coaching your conversations toward real connections.',
    'home.hero.cta.appstore': 'Download on App Store',
    'home.hero.cta.googleplay': 'Get it on Google Play',
    'home.hero.cta.learnmore': 'Learn More',
    'home.hero.stats.users': 'Active Users',
    'home.hero.stats.matches': 'Better Match Rate',
    'home.hero.stats.rating': 'App Store Rating',

    // Home - Features
    'home.features.badge': 'Three Pillars of Success',
    'home.features.title': 'Everything You Need to Win at Dating',
    'home.features.subtitle': 'DateWise combines AI intelligence with dating expertise to give you an unfair advantage in the modern dating landscape.',
    'home.features.profileGlowUp.title': 'Profile Glow Up',
    'home.features.profileGlowUp.description': 'Upload your profile and get a comprehensive AI analysis. Identify weak signals, optimize your bio, select your best photos, and learn exactly what top-performing profiles do differently.',
    'home.features.profileGlowUp.tag1': 'Photo Analysis',
    'home.features.profileGlowUp.tag2': 'Bio Optimizer',
    'home.features.profileGlowUp.tag3': 'Signal Score',
    'home.features.vibeCheck.title': 'Vibe Check',
    'home.features.vibeCheck.description': 'Before investing emotionally, screen potential matches for red flags, compatibility signals, and authentic intent. Get personalized conversation openers tailored to their specific profile.',
    'home.features.vibeCheck.tag1': 'Red Flag Detection',
    'home.features.vibeCheck.tag2': 'Compatibility Score',
    'home.features.vibeCheck.tag3': 'Smart Openers',
    'home.features.chatCopilot.title': 'Chat Copilot',
    'home.features.chatCopilot.description': 'Paste your conversation and get instant diagnosis. Is the vibe fading? Are they interested? Get AI-crafted reply suggestions and strategic advice to move from chat to actual dates.',
    'home.features.chatCopilot.tag1': 'Conversation Diagnosis',
    'home.features.chatCopilot.tag2': 'Reply Suggestions',
    'home.features.chatCopilot.tag3': 'Date Strategy',

    // Home - How It Works
    'home.howItWorks.badge': 'Simple & Effective',
    'home.howItWorks.title': 'From Setup to Success in Minutes',
    'home.howItWorks.subtitle': 'DateWise works alongside your existing dating apps — no switching required.',
    'home.howItWorks.step1.title': 'Quick Onboarding',
    'home.howItWorks.step1.description': 'Tell DateWise about your dating goals, what you\'re looking for, and your current platforms. Takes less than 2 minutes.',
    'home.howItWorks.step2.title': 'Profile Analysis',
    'home.howItWorks.step2.description': 'Upload your profile screenshots. Our AI analyzes every element — photos, bio, prompts — and gives you a detailed improvement roadmap.',
    'home.howItWorks.step3.title': 'Match Screening',
    'home.howItWorks.step3.description': 'Screenshot a potential match\'s profile and get instant vibe analysis, red flag alerts, compatibility insights, and personalized openers.',
    'home.howItWorks.step4.title': 'Chat Coaching',
    'home.howItWorks.step4.description': 'Paste your conversation whenever you feel stuck. Get expert-level reply suggestions and strategies to build momentum toward a real date.',

    // Home - Testimonials
    'home.testimonials.badge': 'Real Stories',
    'home.testimonials.title': 'What Our Users Say',
    'home.testimonials.subtitle': 'Thousands of people have transformed their dating life with DateWise.',
    'home.testimonials.1.name': 'Alex M.',
    'home.testimonials.1.role': 'Software Engineer, San Francisco',
    'home.testimonials.1.text': 'I was getting almost zero matches before DateWise. After the profile analysis, I revamped my photos and bio based on the AI recommendations. My match rate tripled in two weeks. Genuinely shocked.',
    'home.testimonials.2.name': 'Jordan K.',
    'home.testimonials.2.role': 'Marketing Manager, New York',
    'home.testimonials.2.text': 'The Vibe Check feature alone is worth it. I almost invested months into someone who had multiple red flags I completely missed. DateWise caught them immediately. It\'s like having a brutally honest best friend.',
    'home.testimonials.3.name': 'Taylor R.',
    'home.testimonials.3.role': 'Nurse, Austin',
    'home.testimonials.3.text': 'Chat Copilot saved so many conversations I thought were dying. The reply suggestions feel natural — not robotic at all. I\'ve gone on 4 dates this month compared to 0 last month. Game changer.',

    // Home - Download CTA
    'home.download.badge': 'Available Now',
    'home.download.title': 'Start Dating Smarter Today',
    'home.download.subtitle': 'Join thousands of singles who are using AI to build genuine connections. Download DateWise free and transform how you date.',
    'home.download.cta.appstore': 'Download on App Store',
    'home.download.cta.googleplay': 'Get it on Google Play',
    'home.download.free': 'Free to download',
    'home.download.sparks': 'Starter Sparks included',
    'home.download.nocc': 'No credit card required',

    // About
    'about.title': 'About DateWise',
    'about.description': 'We\'re on a mission to help serious relationship seekers navigate modern dating with confidence and clarity.',
    'about.mission.badge': 'Our Mission',
    'about.mission.title': 'Making Meaningful Connections the Norm',
    'about.mission.text1': 'Modern dating apps are overwhelming. Endless swiping, unanswered messages, confusing signals — the process is exhausting and often demoralizing. We built DateWise because we believe everyone deserves a fair shot at finding real love.',
    'about.mission.text2': 'DateWise isn\'t a dating app. We\'re a coaching companion that runs alongside the apps you already use. Our AI analyzes what actually works — not just generic advice — and gives you personalized, actionable guidance based on your unique situation and goals.',
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
    'about.values.4.text': 'DateWise serves people of all orientations, backgrounds, and relationship styles. Great connection advice is universal.',
    'about.team.badge': 'The Team',
    'about.team.title': 'Built by People Who Get It',
    'about.team.text': 'We\'re a small team of engineers, relationship coaches, and AI researchers who got tired of seeing smart, genuine people struggle in the modern dating landscape. We\'ve combined our expertise to build the tool we wish had existed when we were single.',
    'about.cta.title': 'Ready to Date Smarter?',
    'about.cta.text': 'Download DateWise and start your journey toward meaningful connections.',
    'about.cta.button': 'Download Now',

    // Privacy
    'privacy.title': 'Privacy Policy',
    'privacy.description': 'How DateWise collects, uses, and protects your personal information.',
    'privacy.lastUpdated': 'Last Updated: January 1, 2025',
    'privacy.toc.title': 'Table of Contents',
    'privacy.s1.title': '1. Introduction',
    'privacy.s1.content': `DateWise ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use the DateWise mobile application and related services (collectively, the "Service").

Please read this Privacy Policy carefully. By using the Service, you agree to the collection and use of your information in accordance with this policy. If you do not agree with any terms of this Privacy Policy, please discontinue use of the Service immediately.

This policy applies to all users of DateWise worldwide, with specific additional rights for residents of California (under CCPA) and the European Union/EEA (under GDPR), as detailed in Section 7.`,

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
- OpenAI API: We send your uploaded profile text, onboarding answers, and pasted conversation snippets to OpenAI's API to generate AI coaching outputs. OpenAI processes this data as a sub-processor; see Section 10 for our AI Processing Notice.`,

    'privacy.s3.title': '3. How We Use Your Information',
    'privacy.s3.content': `We use the information we collect for the following purposes:

**3.1 Providing the Service**
- To analyze your dating profile and generate personalized improvement recommendations.
- To screen match profiles for compatibility signals and red flags.
- To provide conversation coaching and reply suggestions.
- To process and fulfill your Sparks and Pro subscription purchases.

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
- To protect the rights, safety, and security of DateWise, our users, and the public.`,

    'privacy.s4.title': '4. Sharing Your Information',
    'privacy.s4.content': `We do not sell, rent, or trade your personal information. We share your information only in the following limited circumstances:

**4.1 Service Providers**
We share information with third-party vendors who help us operate the Service, including:
- Firebase / Google: Analytics and crash reporting.
- OpenAI: AI model processing (see Section 10).
- RevenueCat: Subscription and purchase management.
- Customer support tools.

All service providers are contractually bound to process your data only as directed by us and in accordance with applicable privacy laws.

**4.2 Business Transfers**
If DateWise is involved in a merger, acquisition, or asset sale, your information may be transferred as a business asset. We will provide notice before your information becomes subject to a different privacy policy.

**4.3 Legal Requirements**
We may disclose your information if required by law, court order, or government authority, or if we believe disclosure is necessary to protect the rights, safety, or security of DateWise, its users, or the public.

**4.4 With Your Consent**
We may share your information for any other purpose with your explicit consent.`,

    'privacy.s5.title': '5. Data Retention',
    'privacy.s5.content': `DateWise uses a local-first data model. Most of your data is stored on your device and is not transmitted to our servers.

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

To exercise California rights, contact us at support@datewise.easier.today with the subject line "CCPA Request."

**7.3 EU/EEA Residents (GDPR)**
EU/EEA residents have rights under the General Data Protection Regulation:
- Lawful Basis: We process your data based on contract performance (to provide the Service), legitimate interests (service improvement, security), legal obligation, and consent (marketing communications).
- Data Subject Rights: Access, rectification, erasure, restriction of processing, portability, and objection.
- Supervisory Authority: You have the right to lodge a complaint with your local data protection authority.
- International Transfers: Data may be transferred to the United States. We rely on Standard Contractual Clauses (SCCs) or other approved mechanisms for such transfers.

To exercise any privacy right, email us at support@datewise.easier.today. We will respond within 30 days (or 45 days for complex requests).`,

    'privacy.s8.title': '8. Children\'s Privacy',
    'privacy.s8.content': `DateWise is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. Users between ages 13 and 17 may use the Service only with verifiable parental or guardian consent.

If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us immediately at support@datewise.easier.today. We will promptly delete such information from our systems.

We comply with the Children's Online Privacy Protection Act (COPPA) and similar laws in other jurisdictions.`,

    'privacy.s9.title': '9. In-App Purchases & Subscriptions',
    'privacy.s9.content': `DateWise offers both free features and premium features through Sparks (consumable credits) and Pro subscriptions.

**Payment Processing**
All payment transactions are processed by Apple (App Store) or Google (Google Play). We do not directly collect or store your credit card or payment account information. RevenueCat acts as an intermediary to verify and manage subscription status.

**Data Associated with Purchases**
We receive and store: transaction identifiers, purchase timestamps, product purchased, and subscription status. This information is used to unlock premium features and maintain your subscription/purchase status on your device.

**Subscription Auto-Renewal**
Pro subscriptions auto-renew unless cancelled at least 24 hours before the end of the current billing period. You can manage or cancel your subscription through your device's App Store or Google Play settings.

**Refunds**
Requests for refunds on subscriptions are handled by Apple or Google per their respective refund policies. Sparks credits, once consumed, are non-refundable.`,

    'privacy.s10.title': '10. AI Processing Notice',
    'privacy.s10.content': `DateWise uses artificial intelligence, specifically OpenAI's API, to generate personalized coaching insights. This section explains how your content is handled in this process.

**What We Send to AI**
- Text from your dating profile bio and prompts (when you request profile analysis).
- Text descriptions of photos you upload (processed locally or via our servers, not the raw image to OpenAI, unless you use photo analysis features).
- Text excerpts from dating conversations you paste (for Chat Copilot).
- Your onboarding answers (dating goals, preferences) to provide context.

**How AI Processes Your Content**
Your content is sent to OpenAI's API via encrypted connections. OpenAI processes the content to generate responses and does not use API data to train its models by default (per OpenAI's API data usage policies as of our last review).

**No Human Review**
Our team does not read your private messages, conversations, or personal profile content. AI processing is fully automated. Our support team cannot access your personal data as it is stored locally on your device.

**Data Minimization**
We send only what is necessary to generate your coaching output. We do not include unnecessary personal identifiers when sending data to AI APIs.

**Your Control**
You control what you share with DateWise. You are never required to upload private conversation content. All AI analysis features are opt-in by design.`,

    'privacy.s11.title': '11. Changes to This Policy',
    'privacy.s11.content': `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make material changes, we will:

- Update the "Last Updated" date at the top of this policy.
- Send an in-app notification to users.
- In some cases, seek your renewed consent if required by law.

Your continued use of the Service after changes become effective constitutes your acceptance of the revised Privacy Policy. We encourage you to review this policy periodically.`,

    'privacy.s12.title': '12. Contact Us',
    'privacy.s12.content': `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**DateWise Support**
Email: support@datewise.easier.today
Subject: Privacy Inquiry

We are committed to resolving privacy concerns promptly and will respond to all inquiries within 30 business days.

For urgent data security concerns or potential breaches, please email support@datewise.easier.today with the subject line "URGENT: Security Concern."`,

    // Terms
    'terms.title': 'Terms of Service',
    'terms.description': 'Please read these terms carefully before using DateWise.',
    'terms.lastUpdated': 'Last Updated: January 1, 2025',
    'terms.toc.title': 'Table of Contents',
    'terms.s1.title': '1. Acceptance of Terms',
    'terms.s1.content': `These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and DateWise ("Company," "we," "our," or "us") governing your access to and use of the DateWise mobile application, website, and all related services (collectively, the "Service").

BY DOWNLOADING, INSTALLING, ACCESSING, OR USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE SERVICE.

We reserve the right to modify these Terms at any time. Material changes will be communicated via in-app notification or email. Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms.`,

    'terms.s2.title': '2. Description of Service',
    'terms.s2.content': `DateWise is an AI-powered dating companion application designed to help users improve their dating profile presentation, screen potential matches, and improve dating conversations.

**What DateWise Is:**
- A personal coaching tool that works alongside existing dating platforms (Tinder, Bumble, Hinge, and others).
- An AI-driven analytics service that provides personalized recommendations.
- A productivity and self-improvement tool for the context of dating.

**What DateWise Is NOT:**
- A dating platform or matchmaking service. DateWise does not connect users with potential romantic partners.
- A guarantee of romantic success. Our AI provides coaching suggestions, not guaranteed outcomes.
- A substitute for professional psychological, therapeutic, or relationship counseling.
- Affiliated with, endorsed by, or partnered with any third-party dating application mentioned.

The Service includes three core features: Profile Glow Up (profile analysis and optimization), Vibe Check (match screening and opener generation), and Chat Copilot (conversation coaching).`,

    'terms.s3.title': '3. Eligibility',
    'terms.s3.content': `To use DateWise, you must meet the following eligibility requirements:

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
    'terms.s5.content': `You agree to use DateWise only for lawful purposes and in accordance with these Terms. The following conduct is strictly prohibited:

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
DateWise offers a free tier with limited access to core features. Free users receive a limited number of Sparks upon first launch to try premium features.

**6.2 Sparks (Consumable Credits)**
Sparks are in-app consumable credits used to access AI-powered features. Key terms:
- Sparks are purchased through the App Store (Apple) or Google Play (Google).
- Sparks have no cash value and are non-refundable once purchased.
- Sparks are non-transferable and tied to your device and App Store/Google Play account.
- Unused Sparks do not expire unless you uninstall the app or the purchase is refunded.
- Sparks are stored locally; uninstalling the app will remove unused Sparks.

**6.3 Pro Subscription**
The Pro subscription provides unlimited access to premium features for a recurring monthly or annual fee.
- Subscriptions are billed in advance for the subscription period.
- Payment is charged to your Apple/Google account upon confirmation of purchase.
- Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.
- You may manage and cancel your subscription through your device's subscription settings (App Store or Google Play).
- No refunds are provided for the unused portion of an active subscription period, except where required by applicable law.

**6.4 Price Changes**
We reserve the right to change subscription prices with reasonable notice. Price changes will take effect at the start of your next billing cycle.

**6.5 Refund Policy**
All purchases are final, subject to applicable App Store or Google Play refund policies. Refund requests must be submitted through the respective platform (Apple or Google). We do not process refunds directly.

**6.6 Taxes**
Prices may be inclusive or exclusive of applicable taxes depending on your jurisdiction. You are responsible for any applicable taxes.`,

    'terms.s7.title': '7. AI-Generated Content Disclaimer',
    'terms.s7.content': `DateWise uses artificial intelligence to generate personalized coaching insights, suggestions, and recommendations. By using our AI features, you acknowledge and agree to the following:

**7.1 Nature of AI Output**
- AI-generated content is produced by automated systems and reflects patterns learned from data, not human judgment.
- Suggestions are probabilistic and based on general patterns, not specific knowledge of any individual person (including your matches).
- Results may not be accurate, appropriate, or suitable for every situation.

**7.2 Not a Guarantee of Results**
- DateWise does not guarantee that following our suggestions will result in more matches, dates, relationships, or any specific romantic outcome.
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
The Service, including its original content, features, functionality, design, software, algorithms, logos, and trademarks, is owned by DateWise and its licensors and is protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without our explicit written permission.

**8.2 Your Content**
You retain ownership of content you upload to the Service (photos, text, conversation excerpts). By uploading content, you grant DateWise a limited, non-exclusive, royalty-free license to process and analyze that content solely for the purpose of delivering the Service to you. This license terminates when you delete the content from the app.

**8.3 Feedback**
If you submit feedback, suggestions, or ideas about the Service, you grant us an unrestricted, royalty-free right to use such feedback for any purpose, without compensation or attribution to you.

**8.4 AI Output**
AI-generated coaching content produced for you through the Service is provided for your personal use. You may not resell, redistribute, or commercialize AI-generated outputs from DateWise.`,

    'terms.s9.title': '9. Privacy',
    'terms.s9.content': `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and share information about you when you use the Service. By using the Service, you agree to our collection and use of data as described in the Privacy Policy.

The Privacy Policy is incorporated into these Terms by reference and forms part of this agreement. Please review our Privacy Policy at datewise.easier.today/privacy.`,

    'terms.s10.title': '10. Disclaimer of Warranties',
    'terms.s10.content': `THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, DATEWISE DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:

- IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
- WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
- WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY CONTENT OR AI-GENERATED OUTPUT.
- WARRANTIES THAT THE SERVICE WILL MEET YOUR SPECIFIC REQUIREMENTS OR EXPECTATIONS.

Some jurisdictions do not allow the exclusion of implied warranties, so some of the above exclusions may not apply to you.`,

    'terms.s11.title': '11. Limitation of Liability',
    'terms.s11.content': `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, DATEWISE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR:

- ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
- LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES.
- DAMAGES ARISING FROM YOUR USE OR INABILITY TO USE THE SERVICE.
- DAMAGES ARISING FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA.
- DAMAGES ARISING FROM ANY THIRD-PARTY CONDUCT OR CONTENT.
- DAMAGES ARISING FROM YOUR RELIANCE ON AI-GENERATED COACHING CONTENT.

IN NO EVENT SHALL DATEWISE'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO THE SERVICE EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID TO DATEWISE IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS ($100).

Some jurisdictions do not allow limitations on implied warranties or liability for incidental damages, so the above limitations may not fully apply to you.`,

    'terms.s12.title': '12. Indemnification',
    'terms.s12.content': `You agree to indemnify, defend, and hold harmless DateWise and its officers, directors, employees, agents, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:

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
Any dispute, claim, or controversy arising from or relating to these Terms or the Service shall be resolved by binding individual arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, rather than in court. You and DateWise each waive the right to a jury trial and to participate in class action lawsuits.

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

DateWise Support
Email: support@datewise.easier.today
Subject: Terms of Service Inquiry

**15.2 Entire Agreement**
These Terms, together with our Privacy Policy, constitute the entire agreement between you and DateWise regarding the Service and supersede all prior agreements.

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
    'support.faq.q1': 'What is DateWise and how does it work?',
    'support.faq.a1': 'DateWise is an AI-powered dating companion app that works alongside your existing dating apps like Tinder, Bumble, and Hinge. It has three core features: Profile Glow Up (analyzes and optimizes your dating profile), Vibe Check (screens potential matches for compatibility and red flags), and Chat Copilot (coaches you on conversations and helps you move toward dates). You use it in parallel with your dating apps — screenshot or paste content into DateWise and receive personalized AI coaching.',
    'support.faq.q2': 'What are Sparks and how do I get more?',
    'support.faq.a2': 'Sparks are consumable credits used to access AI-powered features. Each analysis or coaching session costs a certain number of Sparks. You receive a free starter pack of Sparks when you download the app. You can purchase additional Sparks bundles from the in-app store, or upgrade to DateWise Pro for unlimited access to all features without worrying about Spark consumption.',
    'support.faq.q3': 'Is my dating conversation data private?',
    'support.faq.a3': 'Yes, absolutely. Your privacy is our top priority. Conversation content you paste into Chat Copilot is processed by our AI to generate coaching and is not permanently stored on our servers after your response is delivered. Our team does not read your private messages. All data processing happens via encrypted connections. See our Privacy Policy for full details.',
    'support.faq.q4': 'How do I cancel my Pro subscription?',
    'support.faq.a4': 'You can cancel your Pro subscription at any time through your device\'s subscription settings. On iPhone/iPad: Go to Settings > Apple ID > Subscriptions > DateWise Pro > Cancel Subscription. On Android: Open Google Play > tap your profile icon > Payments & subscriptions > Subscriptions > DateWise > Cancel. Cancellation takes effect at the end of your current billing period.',
    'support.faq.q5': 'Can I get a refund for Sparks or my subscription?',
    'support.faq.a5': 'Sparks are consumable credits and are non-refundable once purchased, consistent with standard app store policies. For subscription refund requests, please contact Apple (App Store) or Google (Google Play) directly, as all payments are processed through those platforms. We do not process refunds directly. Refund decisions are at the discretion of Apple or Google per their respective policies.',
    'support.faq.q6': 'Does DateWise work for all sexual orientations and relationship types?',
    'support.faq.a6': 'Yes! DateWise is fully inclusive and designed to help all users regardless of sexual orientation, gender identity, or relationship style (monogamous, polyamorous, casual, serious, etc.). During onboarding, you specify your preferences, and all AI coaching is tailored accordingly.',
    'support.faq.q7': 'How do I clear my data or reset the app?',
    'support.faq.a7': 'DateWise stores all your data locally on your device — there is no account or server-side profile. To clear your data, go to Settings (bottom tab) > Clear Data > Confirm. This permanently removes all local data including your onboarding profile and analysis history. You can also simply uninstall the app to remove all data. If you need further help, email us at support@datewise.easier.today.',
    'support.faq.q8': 'The app is not working correctly. What should I do?',
    'support.faq.a8': 'First, try closing and reopening the app. If issues persist, try: (1) Check your internet connection; (2) Update to the latest version of DateWise from the App Store or Google Play; (3) Restart your device; (4) Uninstall and reinstall the app (your local data will be cleared on reinstall). If none of these steps help, please contact us at support@datewise.easier.today with a description of the issue and your device model and OS version.',
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

    // Delete Account
    'delete.title': 'Delete Your Account',
    'delete.description': 'Instructions for deleting your DateWise account and all associated data.',
    'delete.intro': 'We\'re sorry to see you go. If you\'d like to delete your DateWise account and all associated data, follow the instructions below. Account deletion is permanent and cannot be undone.',
    'delete.warning': 'Warning: Account deletion is permanent',
    'delete.warningText': 'Once your account is deleted, all your data — including your profile, analysis history, purchased Sparks (unused credits), and subscription — will be permanently removed. This action cannot be reversed.',
    'delete.method1.title': 'Method 1: Delete In-App (Recommended)',
    'delete.method1.step1': 'Open the DateWise app on your device.',
    'delete.method1.step2': 'Navigate to the Settings tab (bottom navigation bar).',
    'delete.method1.step3': 'Tap on "Account" in the settings menu.',
    'delete.method1.step4': 'Scroll down and tap "Delete Account".',
    'delete.method1.step5': 'Read the confirmation dialog carefully and tap "Confirm Delete" to permanently delete your account.',
    'delete.method2.title': 'Method 2: Email Request',
    'delete.method2.text': 'If you cannot access the app, you can request account deletion by email:',
    'delete.method2.step1': 'Send an email to support@datewise.easier.today',
    'delete.method2.step2': 'Use the subject line: "Account Deletion Request"',
    'delete.method2.step3': 'Include the email address associated with your DateWise account',
    'delete.method2.step4': 'We will process your request within 5 business days and send you a confirmation',
    'delete.dataInfo.title': 'What Happens to Your Data',
    'delete.dataInfo.text': 'After your deletion request is confirmed:',
    'delete.dataInfo.1': 'Your account and profile information will be immediately deactivated.',
    'delete.dataInfo.2': 'All personal data will be permanently deleted within 30 days.',
    'delete.dataInfo.3': 'Purchase records may be retained for up to 7 years for accounting and legal compliance purposes.',
    'delete.dataInfo.4': 'Anonymized, aggregated usage data that cannot be linked to you may be retained for service improvement.',
    'delete.contact': 'Questions? Contact us at support@datewise.easier.today',
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
    'footer.copyright': '© 2025 DateWise. Tất cả quyền được bảo lưu.',
    'footer.features': 'Tính năng',
    'footer.howItWorks': 'Cách hoạt động',
    'footer.pricing': 'Bảng giá',
    'footer.about': 'Về chúng tôi',
    'footer.support': 'Hỗ trợ',
    'footer.privacy': 'Chính sách bảo mật',
    'footer.terms': 'Điều khoản dịch vụ',

    // Home - Hero
    'home.hero.badge': 'Huấn luyện viên hẹn hò AI',
    'home.hero.title': 'Hẹn hò thông minh hơn, kết nối sâu sắc hơn',
    'home.hero.subtitle': 'DateWise là người bạn đồng hành thông minh chạy song song với Tinder, Bumble và Hinge — tối ưu hóa hồ sơ, sàng lọc người phù hợp và huấn luyện cuộc trò chuyện của bạn hướng đến những kết nối thực sự.',
    'home.hero.cta.appstore': 'Tải trên App Store',
    'home.hero.cta.googleplay': 'Tải trên Google Play',
    'home.hero.cta.learnmore': 'Tìm hiểu thêm',
    'home.hero.stats.users': 'Người dùng tích cực',
    'home.hero.stats.matches': 'Tỷ lệ match tốt hơn',
    'home.hero.stats.rating': 'Đánh giá App Store',

    // Home - Features
    'home.features.badge': 'Ba trụ cột thành công',
    'home.features.title': 'Mọi thứ bạn cần để thành công trong hẹn hò',
    'home.features.subtitle': 'DateWise kết hợp trí tuệ AI với kiến thức hẹn hò chuyên sâu để mang lại cho bạn lợi thế vượt trội trong bối cảnh hẹn hò hiện đại.',
    'home.features.profileGlowUp.title': 'Nâng cấp hồ sơ',
    'home.features.profileGlowUp.description': 'Tải lên hồ sơ của bạn và nhận phân tích AI toàn diện. Xác định điểm yếu, tối ưu bio, chọn ảnh tốt nhất và học chính xác những gì hồ sơ hàng đầu làm khác biệt.',
    'home.features.profileGlowUp.tag1': 'Phân tích ảnh',
    'home.features.profileGlowUp.tag2': 'Tối ưu bio',
    'home.features.profileGlowUp.tag3': 'Điểm tín hiệu',
    'home.features.vibeCheck.title': 'Kiểm tra Vibe',
    'home.features.vibeCheck.description': 'Trước khi đầu tư cảm xúc, hãy sàng lọc người phù hợp tiềm năng để phát hiện dấu hiệu cảnh báo, tín hiệu tương thích và ý định thực sự. Nhận câu mở đầu cá nhân hóa phù hợp với hồ sơ của họ.',
    'home.features.vibeCheck.tag1': 'Phát hiện cờ đỏ',
    'home.features.vibeCheck.tag2': 'Điểm tương thích',
    'home.features.vibeCheck.tag3': 'Câu mở đầu thông minh',
    'home.features.chatCopilot.title': 'Hỗ trợ trò chuyện',
    'home.features.chatCopilot.description': 'Dán cuộc trò chuyện của bạn và nhận chẩn đoán tức thì. Vibe có đang giảm không? Họ có quan tâm không? Nhận gợi ý trả lời do AI soạn thảo và lời khuyên chiến lược để chuyển từ chat sang hẹn hò thực tế.',
    'home.features.chatCopilot.tag1': 'Chẩn đoán hội thoại',
    'home.features.chatCopilot.tag2': 'Gợi ý trả lời',
    'home.features.chatCopilot.tag3': 'Chiến lược hẹn hò',

    // Home - How It Works
    'home.howItWorks.badge': 'Đơn giản & Hiệu quả',
    'home.howItWorks.title': 'Từ cài đặt đến thành công trong vài phút',
    'home.howItWorks.subtitle': 'DateWise hoạt động song song với các ứng dụng hẹn hò hiện có của bạn — không cần chuyển đổi.',
    'home.howItWorks.step1.title': 'Cài đặt nhanh',
    'home.howItWorks.step1.description': 'Cho DateWise biết mục tiêu hẹn hò, điều bạn đang tìm kiếm và các nền tảng hiện tại. Mất chưa đến 2 phút.',
    'home.howItWorks.step2.title': 'Phân tích hồ sơ',
    'home.howItWorks.step2.description': 'Tải lên ảnh chụp màn hình hồ sơ. AI của chúng tôi phân tích từng yếu tố — ảnh, bio, prompt — và cung cấp lộ trình cải thiện chi tiết.',
    'home.howItWorks.step3.title': 'Sàng lọc người phù hợp',
    'home.howItWorks.step3.description': 'Chụp màn hình hồ sơ của người phù hợp tiềm năng và nhận phân tích vibe tức thì, cảnh báo cờ đỏ, thông tin tương thích và câu mở đầu cá nhân hóa.',
    'home.howItWorks.step4.title': 'Huấn luyện trò chuyện',
    'home.howItWorks.step4.description': 'Dán cuộc trò chuyện bất cứ khi nào bạn cảm thấy bế tắc. Nhận gợi ý trả lời chất lượng chuyên gia và chiến lược để xây dựng đà tiến tới một cuộc hẹn thực sự.',

    // Home - Testimonials
    'home.testimonials.badge': 'Câu chuyện thật',
    'home.testimonials.title': 'Người dùng nói gì về chúng tôi',
    'home.testimonials.subtitle': 'Hàng ngàn người đã thay đổi cuộc sống hẹn hò của họ với DateWise.',
    'home.testimonials.1.name': 'Alex M.',
    'home.testimonials.1.role': 'Kỹ sư phần mềm, San Francisco',
    'home.testimonials.1.text': 'Trước DateWise, tôi hầu như không có match nào. Sau khi phân tích hồ sơ, tôi cải thiện ảnh và bio theo gợi ý AI. Tỷ lệ match của tôi tăng gấp 3 trong hai tuần. Thực sự bất ngờ.',
    'home.testimonials.2.name': 'Jordan K.',
    'home.testimonials.2.role': 'Giám đốc marketing, New York',
    'home.testimonials.2.text': 'Tính năng Kiểm tra Vibe một mình đã xứng đáng rồi. Tôi suýt đầu tư nhiều tháng vào người có nhiều dấu hiệu cảnh báo mà tôi hoàn toàn bỏ sót. DateWise phát hiện ngay. Như có người bạn thật thà.',
    'home.testimonials.3.name': 'Taylor R.',
    'home.testimonials.3.role': 'Y tá, Austin',
    'home.testimonials.3.text': 'Chat Copilot đã cứu rất nhiều cuộc trò chuyện tôi tưởng đã tàn. Gợi ý trả lời tự nhiên — không robot chút nào. Tháng này tôi đã đi 4 buổi hẹn so với 0 tháng trước. Thay đổi hoàn toàn.',

    // Home - Download CTA
    'home.download.badge': 'Có sẵn ngay',
    'home.download.title': 'Bắt đầu hẹn hò thông minh hơn ngay hôm nay',
    'home.download.subtitle': 'Tham gia hàng ngàn người độc thân đang sử dụng AI để xây dựng kết nối thực sự. Tải DateWise miễn phí và thay đổi cách bạn hẹn hò.',
    'home.download.cta.appstore': 'Tải trên App Store',
    'home.download.cta.googleplay': 'Tải trên Google Play',
    'home.download.free': 'Tải xuống miễn phí',
    'home.download.sparks': 'Tặng Sparks khởi đầu',
    'home.download.nocc': 'Không cần thẻ tín dụng',

    // About
    'about.title': 'Về DateWise',
    'about.description': 'Chúng tôi có sứ mệnh giúp những người tìm kiếm mối quan hệ nghiêm túc điều hướng việc hẹn hò hiện đại với sự tự tin và rõ ràng.',
    'about.mission.badge': 'Sứ mệnh của chúng tôi',
    'about.mission.title': 'Biến những kết nối ý nghĩa thành điều bình thường',
    'about.mission.text1': 'Các ứng dụng hẹn hò hiện đại thật áp đảo. Vuốt vô tận, tin nhắn không có hồi đáp, tín hiệu khó hiểu — quá trình này kiệt sức và thường chán nản. Chúng tôi xây dựng DateWise vì tin rằng mọi người đều xứng đáng có cơ hội công bằng để tìm thấy tình yêu thực sự.',
    'about.mission.text2': 'DateWise không phải là ứng dụng hẹn hò. Chúng tôi là người bạn huấn luyện đồng hành với các ứng dụng bạn đã sử dụng. AI của chúng tôi phân tích những gì thực sự hiệu quả — không chỉ là lời khuyên chung chung — và cung cấp hướng dẫn cá nhân hóa, có thể thực hiện được dựa trên tình huống và mục tiêu riêng của bạn.',
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
    'about.values.4.text': 'DateWise phục vụ mọi người ở mọi khuynh hướng, hoàn cảnh và phong cách mối quan hệ. Lời khuyên kết nối tốt là phổ quát.',
    'about.team.badge': 'Đội ngũ',
    'about.team.title': 'Được xây dựng bởi những người hiểu bạn',
    'about.team.text': 'Chúng tôi là một nhóm nhỏ các kỹ sư, huấn luyện viên quan hệ và nhà nghiên cứu AI đã chán nhìn thấy những người thông minh, chân thành vật lộn trong bối cảnh hẹn hò hiện đại. Chúng tôi đã kết hợp chuyên môn của mình để xây dựng công cụ mà chúng tôi ước đã tồn tại khi còn độc thân.',
    'about.cta.title': 'Sẵn sàng hẹn hò thông minh hơn?',
    'about.cta.text': 'Tải DateWise và bắt đầu hành trình hướng đến những kết nối ý nghĩa.',
    'about.cta.button': 'Tải ngay',

    // Privacy - Vietnamese
    'privacy.title': 'Chính Sách Bảo Mật',
    'privacy.description': 'DateWise thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn như thế nào.',
    'privacy.lastUpdated': 'Cập nhật lần cuối: 1 tháng 1, 2025',
    'privacy.toc.title': 'Mục lục',
    'privacy.s1.title': '1. Giới thiệu',
    'privacy.s1.content': `DateWise ("chúng tôi" hoặc "của chúng tôi") cam kết bảo vệ quyền riêng tư của bạn. Chính Sách Bảo Mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin cá nhân của bạn khi bạn sử dụng ứng dụng di động DateWise và các dịch vụ liên quan (gọi chung là "Dịch vụ").

Vui lòng đọc kỹ Chính Sách Bảo Mật này. Bằng cách sử dụng Dịch vụ, bạn đồng ý với việc thu thập và sử dụng thông tin của bạn theo chính sách này.

Chính sách này áp dụng cho tất cả người dùng DateWise trên toàn thế giới.`,

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
- OpenAI API: Chúng tôi gửi văn bản hồ sơ, câu trả lời onboarding và đoạn trích hội thoại của bạn đến API OpenAI để tạo ra các đầu ra huấn luyện AI. Xem Phần 10 để biết thêm chi tiết.`,

    'privacy.s3.title': '3. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn',
    'privacy.s3.content': `Chúng tôi sử dụng thông tin thu thập được cho các mục đích sau:

**3.1 Cung cấp Dịch vụ**
- Phân tích hồ sơ hẹn hò và tạo khuyến nghị cải thiện cá nhân hóa.
- Sàng lọc hồ sơ để tìm tín hiệu tương thích và dấu hiệu cảnh báo.
- Cung cấp huấn luyện hội thoại và gợi ý trả lời.
- Xử lý mua hàng Sparks và đăng ký Pro.

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
- Bảo vệ quyền, sự an toàn và bảo mật của DateWise, người dùng và cộng đồng.`,

    'privacy.s4.title': '4. Chia Sẻ Thông Tin Của Bạn',
    'privacy.s4.content': `Chúng tôi không bán, cho thuê hoặc giao dịch thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp hạn chế sau:

**4.1 Nhà cung cấp dịch vụ**
- Firebase / Google: Phân tích và báo cáo sự cố.
- OpenAI: Xử lý mô hình AI.
- RevenueCat: Quản lý đăng ký và mua hàng.

**4.2 Chuyển giao kinh doanh**
Nếu DateWise tham gia vào việc sáp nhập hoặc mua lại, thông tin của bạn có thể được chuyển giao.

**4.3 Yêu cầu pháp lý**
Chúng tôi có thể tiết lộ thông tin nếu pháp luật yêu cầu.`,

    'privacy.s5.title': '5. Lưu Trữ Dữ Liệu',
    'privacy.s5.content': `DateWise sử dụng mô hình dữ liệu ưu tiên cục bộ. Hầu hết dữ liệu của bạn được lưu trữ trên thiết bị và không được truyền đến máy chủ của chúng tôi.

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

Để thực hiện bất kỳ quyền bảo mật nào, hãy gửi email cho chúng tôi tại support@datewise.easier.today.`,

    'privacy.s8.title': '8. Quyền Riêng Tư Của Trẻ Em',
    'privacy.s8.content': `DateWise không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố tình thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi. Người dùng từ 13 đến 17 tuổi chỉ có thể sử dụng Dịch vụ với sự đồng ý của cha mẹ hoặc người giám hộ.`,

    'privacy.s9.title': '9. Mua Hàng Trong Ứng Dụng & Đăng Ký',
    'privacy.s9.content': `DateWise cung cấp cả tính năng miễn phí và cao cấp thông qua Sparks và đăng ký Pro.

**Xử lý thanh toán**
Tất cả giao dịch thanh toán được xử lý bởi Apple (App Store) hoặc Google (Google Play). Chúng tôi không trực tiếp thu thập hoặc lưu trữ thông tin thẻ tín dụng của bạn. RevenueCat đóng vai trò trung gian để xác minh và quản lý trạng thái đăng ký.

**Dữ liệu liên quan đến mua hàng**
Chúng tôi nhận và lưu trữ: định danh giao dịch, dấu thời gian mua hàng, sản phẩm đã mua và trạng thái đăng ký. Thông tin này được sử dụng để mở khóa tính năng cao cấp và duy trì trạng thái đăng ký/mua hàng của bạn trên thiết bị.

**Tự động gia hạn đăng ký**
Đăng ký Pro tự động gia hạn trừ khi được hủy ít nhất 24 giờ trước khi kết thúc kỳ thanh toán hiện tại. Bạn có thể quản lý hoặc hủy đăng ký thông qua cài đặt App Store hoặc Google Play của thiết bị.`,

    'privacy.s10.title': '10. Thông Báo Xử Lý AI',
    'privacy.s10.content': `DateWise sử dụng trí tuệ nhân tạo, cụ thể là API của OpenAI, để tạo ra các thông tin huấn luyện cá nhân hóa.

**Những gì chúng tôi gửi đến AI**
- Văn bản từ bio hồ sơ hẹn hò của bạn.
- Đoạn trích văn bản từ các cuộc trò chuyện hẹn hò bạn dán vào.
- Câu trả lời onboarding của bạn.

**Không có đánh giá của con người**
Nhóm của chúng tôi không đọc tin nhắn riêng tư hoặc nội dung hồ sơ cá nhân của bạn. Xử lý AI hoàn toàn tự động. Nhóm hỗ trợ của chúng tôi không thể truy cập dữ liệu cá nhân của bạn vì dữ liệu được lưu trữ cục bộ trên thiết bị của bạn.

**Giảm thiểu dữ liệu**
Chúng tôi chỉ gửi những gì cần thiết để tạo ra đầu ra huấn luyện của bạn. Chúng tôi không bao gồm các định danh cá nhân không cần thiết khi gửi dữ liệu đến API AI.

**Quyền kiểm soát của bạn**
Bạn kiểm soát những gì bạn chia sẻ với DateWise. Bạn không bao giờ bắt buộc phải tải lên nội dung hội thoại riêng tư. Tất cả các tính năng phân tích AI đều là tùy chọn theo thiết kế.`,

    'privacy.s11.title': '11. Thay Đổi Chính Sách Này',
    'privacy.s11.content': `Chúng tôi có thể cập nhật Chính Sách Bảo Mật này theo thời gian. Khi chúng tôi thực hiện các thay đổi quan trọng, chúng tôi sẽ:

- Cập nhật ngày "Cập nhật lần cuối" ở đầu chính sách này.
- Gửi thông báo trong ứng dụng cho người dùng.
- Trong một số trường hợp, yêu cầu sự đồng ý mới của bạn nếu pháp luật yêu cầu.

Việc tiếp tục sử dụng Dịch vụ sau khi các thay đổi có hiệu lực cấu thành sự chấp nhận Chính Sách Bảo Mật đã sửa đổi của bạn.`,

    'privacy.s12.title': '12. Liên Hệ Chúng Tôi',
    'privacy.s12.content': `Nếu bạn có câu hỏi về Chính Sách Bảo Mật này, vui lòng liên hệ:

Email: support@datewise.easier.today
Chủ đề: Yêu cầu Quyền riêng tư`,

    // Terms - Vietnamese
    'terms.title': 'Điều Khoản Dịch Vụ',
    'terms.description': 'Vui lòng đọc kỹ các điều khoản này trước khi sử dụng DateWise.',
    'terms.lastUpdated': 'Cập nhật lần cuối: 1 tháng 1, 2025',
    'terms.toc.title': 'Mục lục',
    'terms.s1.title': '1. Chấp Nhận Điều Khoản',
    'terms.s1.content': `Các Điều Khoản Dịch Vụ này ("Điều Khoản") tạo thành thỏa thuận ràng buộc pháp lý giữa bạn ("Người dùng") và DateWise ("Công ty") điều chỉnh quyền truy cập và sử dụng ứng dụng di động DateWise và tất cả các dịch vụ liên quan.

BẰNG CÁCH TẢI XUỐNG, CÀI ĐẶT, TRUY CẬP HOẶC SỬ DỤNG DỊCH VỤ, BẠN THỪA NHẬN RẰNG BẠN ĐÃ ĐỌC, HIỂU VÀ ĐỒNG Ý BỊ RÀNG BUỘC BỞI CÁC ĐIỀU KHOẢN NÀY.`,

    'terms.s2.title': '2. Mô Tả Dịch Vụ',
    'terms.s2.content': `DateWise là ứng dụng đồng hành hẹn hò được hỗ trợ bởi AI được thiết kế để giúp người dùng cải thiện hồ sơ hẹn hò, sàng lọc người phù hợp tiềm năng và cải thiện các cuộc trò chuyện hẹn hò.

**DateWise LÀ:**
- Công cụ huấn luyện cá nhân hoạt động song song với các nền tảng hẹn hò hiện có.
- Dịch vụ phân tích dựa trên AI cung cấp các khuyến nghị cá nhân hóa.

**DateWise KHÔNG PHẢI LÀ:**
- Nền tảng hẹn hò hay dịch vụ mai mối.
- Sự đảm bảo về thành công trong tình yêu.
- Thay thế cho tư vấn tâm lý hoặc quan hệ chuyên nghiệp.`,

    'terms.s3.title': '3. Điều Kiện',
    'terms.s3.content': `Để sử dụng DateWise, bạn phải đáp ứng các yêu cầu sau:

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
    'terms.s5.content': `Bạn đồng ý chỉ sử dụng DateWise cho các mục đích hợp pháp. Các hành vi sau đây bị nghiêm cấm:

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
DateWise cung cấp gói miễn phí với quyền truy cập hạn chế vào các tính năng cốt lõi. Người dùng miễn phí nhận được một số Sparks hạn chế khi khởi động lần đầu để thử các tính năng cao cấp.

**6.2 Sparks (Tín dụng tiêu dùng)**
Sparks là tín dụng tiêu dùng trong ứng dụng được sử dụng để truy cập các tính năng AI. Các điều khoản chính:
- Sparks được mua qua App Store (Apple) hoặc Google Play (Google).
- Sparks không có giá trị tiền mặt và không được hoàn tiền sau khi mua.
- Sparks không thể chuyển nhượng và gắn với thiết bị và tài khoản App Store/Google Play của bạn.
- Sparks chưa sử dụng không hết hạn trừ khi bạn gỡ cài đặt ứng dụng hoặc giao dịch mua bị hoàn tiền.
- Sparks được lưu trữ cục bộ; gỡ cài đặt ứng dụng sẽ xóa Sparks chưa sử dụng.

**6.3 Đăng ký Pro**
Đăng ký Pro cung cấp quyền truy cập không giới hạn vào các tính năng cao cấp với phí định kỳ hàng tháng hoặc hàng năm.
- Đăng ký được tính phí trước cho kỳ đăng ký.
- Thanh toán được tính vào tài khoản Apple/Google của bạn khi xác nhận mua.
- Đăng ký tự động gia hạn trừ khi hủy ít nhất 24 giờ trước khi kết thúc kỳ hiện tại.
- Bạn có thể quản lý và hủy đăng ký thông qua cài đặt đăng ký của thiết bị (App Store hoặc Google Play).

**6.4 Thay đổi giá**
Chúng tôi bảo lưu quyền thay đổi giá đăng ký với thông báo hợp lý. Thay đổi giá sẽ có hiệu lực vào đầu chu kỳ thanh toán tiếp theo của bạn.

**6.5 Chính sách hoàn tiền**
Tất cả các giao dịch mua là chính thức. Yêu cầu hoàn tiền phải được gửi qua nền tảng tương ứng (Apple hoặc Google). Chúng tôi không xử lý hoàn tiền trực tiếp.`,

    'terms.s7.title': '7. Tuyên Bố Từ Chối Về Nội Dung AI',
    'terms.s7.content': `DateWise sử dụng trí tuệ nhân tạo để tạo ra các thông tin, gợi ý và khuyến nghị huấn luyện cá nhân hóa.

**7.1 Tính chất đầu ra AI**
- Nội dung do AI tạo ra được tạo ra bởi các hệ thống tự động.
- Các gợi ý mang tính xác suất và không đảm bảo kết quả cụ thể.

**7.2 Không phải đảm bảo kết quả**
DateWise không đảm bảo rằng việc làm theo gợi ý của chúng tôi sẽ dẫn đến nhiều match hơn, cuộc hẹn hơn hay bất kỳ kết quả lãng mạn cụ thể nào.

**7.3 Không phải lời khuyên chuyên nghiệp**
Đầu ra huấn luyện AI không thay thế cho lời khuyên tâm lý, trị liệu hoặc quan hệ chuyên nghiệp.`,

    'terms.s8.title': '8. Sở Hữu Trí Tuệ',
    'terms.s8.content': `**8.1 Tài sản của chúng tôi**
Dịch vụ, bao gồm nội dung gốc, tính năng, chức năng, thiết kế, phần mềm, thuật toán, logo và thương hiệu, thuộc sở hữu của DateWise và các bên cấp phép của nó và được bảo vệ bởi luật sở hữu trí tuệ. Bạn không được sao chép, sửa đổi, phân phối, bán hoặc cho thuê bất kỳ phần nào của Dịch vụ mà không có sự cho phép bằng văn bản rõ ràng của chúng tôi.

**8.2 Nội dung của bạn**
Bạn giữ quyền sở hữu nội dung bạn tải lên Dịch vụ (ảnh, văn bản, đoạn trích hội thoại). Bằng cách tải lên nội dung, bạn cấp cho DateWise giấy phép hạn chế, không độc quyền, miễn phí bản quyền để xử lý và phân tích nội dung đó chỉ nhằm mục đích cung cấp Dịch vụ cho bạn. Giấy phép này chấm dứt khi bạn xóa nội dung khỏi ứng dụng.

**8.3 Phản hồi**
Nếu bạn gửi phản hồi, gợi ý hoặc ý tưởng về Dịch vụ, bạn cấp cho chúng tôi quyền không hạn chế, miễn phí bản quyền để sử dụng phản hồi đó cho bất kỳ mục đích nào.

**8.4 Đầu ra AI**
Nội dung huấn luyện do AI tạo ra cho bạn thông qua Dịch vụ được cung cấp cho mục đích sử dụng cá nhân của bạn. Bạn không được bán lại, phân phối lại hoặc thương mại hóa đầu ra do AI tạo ra từ DateWise.`,

    'terms.s9.title': '9. Quyền Riêng Tư',
    'terms.s9.content': `Quyền riêng tư của bạn rất quan trọng với chúng tôi. Chính Sách Bảo Mật của chúng tôi giải thích cách chúng tôi thu thập, sử dụng và chia sẻ thông tin về bạn khi bạn sử dụng Dịch vụ.

Chính Sách Bảo Mật được tích hợp vào các Điều Khoản này bằng cách tham chiếu. Vui lòng xem lại Chính Sách Bảo Mật tại datewise.easier.today/privacy.`,

    'terms.s10.title': '10. Từ Chối Bảo Hành',
    'terms.s10.content': `DỊCH VỤ ĐƯỢC CUNG CẤP TRÊN CƠ SỞ "NGUYÊN TRẠNG" VÀ "KHI CÓ SẴN" MÀ KHÔNG CÓ BẢO ĐẢM DƯỚI BẤT KỲ HÌNH THỨC NÀO. DATEWISE TỪ CHỐI TẤT CẢ BẢO ĐẢM BAO GỒM BẢO ĐẢM NGỤ Ý VỀ KHẢ NĂNG BÁN ĐƯỢC, PHÙ HỢP CHO MỤC ĐÍCH CỤ THỂ VÀ KHÔNG VI PHẠM.`,

    'terms.s11.title': '11. Giới Hạn Trách Nhiệm',
    'terms.s11.content': `TRONG PHẠM VI TỐI ĐA ĐƯỢC LUẬT ÁP DỤNG CHO PHÉP, DATEWISE SẼ KHÔNG CHỊU TRÁCH NHIỆM VỀ BẤT KỲ THIỆT HẠI GIÁN TIẾP, NGẪU NHIÊN, ĐẶC BIỆT, DO HẬU QUẢ HOẶC TRỪNG PHẠT NÀO.

TỔNG TRÁCH NHIỆM CỦA DATEWISE ĐỐI VỚI BẠN SẼ KHÔNG VƯỢT QUÁ SỐ TIỀN CAO HƠN TRONG: (A) SỐ TIỀN BẠN ĐÃ THANH TOÁN CHO DATEWISE TRONG 12 THÁNG TRƯỚC, HOẶC (B) MỘT TRĂM ĐÔ LA MỸ ($100).`,

    'terms.s12.title': '12. Bồi Thường',
    'terms.s12.content': `Bạn đồng ý bồi thường, bảo vệ và giữ DateWise và các cán bộ, giám đốc, nhân viên, đại lý của nó vô hại khỏi bất kỳ khiếu nại, trách nhiệm pháp lý, thiệt hại phát sinh từ: vi phạm Điều Khoản của bạn, việc sử dụng Dịch vụ của bạn, hoặc vi phạm quyền của bên thứ ba.`,

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

Email: support@datewise.easier.today
Chủ đề: Yêu cầu Điều Khoản Dịch Vụ

**15.2 Toàn bộ thỏa thuận**
Các Điều Khoản này, cùng với Chính Sách Bảo Mật của chúng tôi, cấu thành toàn bộ thỏa thuận giữa bạn và DateWise.

**15.3 Khả năng tách biệt**
Nếu bất kỳ điều khoản nào được tìm thấy không thể thực thi, các điều khoản còn lại sẽ vẫn có hiệu lực đầy đủ.`,

    // Support - Vietnamese
    'support.title': 'Trung Tâm Hỗ Trợ',
    'support.description': 'Chúng tôi ở đây để giúp đỡ. Tìm câu trả lời cho các câu hỏi thường gặp hoặc liên hệ trực tiếp.',
    'support.faq.badge': 'Câu hỏi thường gặp',
    'support.faq.title': 'Các Câu Hỏi Thường Gặp',
    'support.faq.q1': 'DateWise là gì và hoạt động như thế nào?',
    'support.faq.a1': 'DateWise là ứng dụng đồng hành hẹn hò AI hoạt động song song với các ứng dụng hẹn hò hiện có như Tinder, Bumble và Hinge. Nó có ba tính năng cốt lõi: Nâng cấp hồ sơ, Kiểm tra Vibe và Hỗ trợ trò chuyện.',
    'support.faq.q2': 'Sparks là gì và làm thế nào để có thêm?',
    'support.faq.a2': 'Sparks là tín dụng tiêu dùng trong ứng dụng được sử dụng để truy cập các tính năng AI. Bạn nhận được gói Sparks khởi đầu miễn phí khi tải xuống ứng dụng. Bạn có thể mua thêm gói Sparks từ cửa hàng trong ứng dụng, hoặc nâng cấp lên DateWise Pro.',
    'support.faq.q3': 'Dữ liệu cuộc trò chuyện hẹn hò của tôi có riêng tư không?',
    'support.faq.a3': 'Có, hoàn toàn. Nội dung hội thoại bạn dán vào Chat Copilot được xử lý bởi AI và không được lưu trữ vĩnh viễn trên máy chủ của chúng tôi sau khi phản hồi của bạn được gửi. Nhóm của chúng tôi không đọc tin nhắn riêng tư của bạn.',
    'support.faq.q4': 'Làm thế nào để hủy đăng ký Pro?',
    'support.faq.a4': 'Bạn có thể hủy đăng ký Pro bất cứ lúc nào thông qua cài đặt đăng ký của thiết bị. Trên iPhone/iPad: Vào Cài đặt > Apple ID > Đăng ký > DateWise Pro > Hủy đăng ký.',
    'support.faq.q5': 'Tôi có thể hoàn tiền cho Sparks hoặc đăng ký không?',
    'support.faq.a5': 'Sparks không được hoàn tiền sau khi mua. Đối với yêu cầu hoàn tiền đăng ký, vui lòng liên hệ trực tiếp Apple (App Store) hoặc Google (Google Play).',
    'support.faq.q6': 'DateWise có hoạt động cho mọi xu hướng tình dục và loại mối quan hệ không?',
    'support.faq.a6': 'Có! DateWise được thiết kế hoàn toàn để giúp tất cả người dùng bất kể xu hướng tình dục, giới tính hoặc phong cách mối quan hệ.',
    'support.faq.q7': 'Làm thế nào để xóa dữ liệu hoặc đặt lại ứng dụng?',
    'support.faq.a7': 'DateWise lưu trữ toàn bộ dữ liệu của bạn ngay trên thiết bị — không có tài khoản hay dữ liệu trên máy chủ. Để xóa dữ liệu, vào Cài đặt > Xóa dữ liệu > Xác nhận. Thao tác này xóa vĩnh viễn tất cả dữ liệu local bao gồm hồ sơ onboarding và lịch sử phân tích. Bạn cũng có thể gỡ cài đặt ứng dụng để xóa toàn bộ dữ liệu. Nếu cần thêm hỗ trợ, hãy email chúng tôi tại support@datewise.easier.today.',
    'support.faq.q8': 'Ứng dụng không hoạt động đúng. Tôi phải làm gì?',
    'support.faq.a8': 'Trước tiên, hãy thử đóng và mở lại ứng dụng. Nếu vấn đề vẫn còn, hãy thử: (1) Kiểm tra kết nối internet; (2) Cập nhật lên phiên bản mới nhất của DateWise; (3) Khởi động lại thiết bị; (4) Gỡ cài đặt và cài đặt lại ứng dụng (dữ liệu local sẽ bị xóa khi cài lại). Nếu không có bước nào giúp ích, vui lòng liên hệ chúng tôi tại support@datewise.easier.today.',
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

    // Delete Account - Vietnamese
    'delete.title': 'Xóa Tài Khoản Của Bạn',
    'delete.description': 'Hướng dẫn xóa tài khoản DateWise và tất cả dữ liệu liên quan.',
    'delete.intro': 'Chúng tôi rất tiếc khi thấy bạn rời đi. Nếu bạn muốn xóa tài khoản DateWise và tất cả dữ liệu liên quan, hãy làm theo hướng dẫn dưới đây.',
    'delete.warning': 'Cảnh báo: Xóa tài khoản là vĩnh viễn',
    'delete.warningText': 'Sau khi tài khoản của bạn bị xóa, tất cả dữ liệu của bạn — bao gồm hồ sơ, lịch sử phân tích, Sparks đã mua và đăng ký — sẽ bị xóa vĩnh viễn. Hành động này không thể đảo ngược.',
    'delete.method1.title': 'Phương thức 1: Xóa trong ứng dụng (Khuyến nghị)',
    'delete.method1.step1': 'Mở ứng dụng DateWise trên thiết bị của bạn.',
    'delete.method1.step2': 'Điều hướng đến tab Cài đặt (thanh điều hướng dưới cùng).',
    'delete.method1.step3': 'Nhấn vào "Tài khoản" trong menu cài đặt.',
    'delete.method1.step4': 'Cuộn xuống và nhấn "Xóa tài khoản".',
    'delete.method1.step5': 'Đọc kỹ hộp thoại xác nhận và nhấn "Xác nhận xóa" để xóa tài khoản vĩnh viễn.',
    'delete.method2.title': 'Phương thức 2: Yêu cầu qua email',
    'delete.method2.text': 'Nếu bạn không thể truy cập ứng dụng, bạn có thể yêu cầu xóa tài khoản qua email:',
    'delete.method2.step1': 'Gửi email đến support@datewise.easier.today',
    'delete.method2.step2': 'Sử dụng tiêu đề: "Yêu cầu Xóa Tài Khoản"',
    'delete.method2.step3': 'Bao gồm địa chỉ email liên kết với tài khoản DateWise của bạn',
    'delete.method2.step4': 'Chúng tôi sẽ xử lý yêu cầu của bạn trong vòng 5 ngày làm việc',
    'delete.dataInfo.title': 'Điều Gì Xảy Ra Với Dữ Liệu Của Bạn',
    'delete.dataInfo.text': 'Sau khi yêu cầu xóa của bạn được xác nhận:',
    'delete.dataInfo.1': 'Tài khoản và thông tin hồ sơ của bạn sẽ được ngay lập tức vô hiệu hóa.',
    'delete.dataInfo.2': 'Tất cả dữ liệu cá nhân sẽ được xóa vĩnh viễn trong vòng 30 ngày.',
    'delete.dataInfo.3': 'Hồ sơ mua hàng có thể được lưu giữ tối đa 7 năm.',
    'delete.dataInfo.4': 'Dữ liệu sử dụng tổng hợp ẩn danh không thể liên kết với bạn có thể được giữ lại.',
    'delete.contact': 'Câu hỏi? Liên hệ chúng tôi tại support@datewise.easier.today',
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
