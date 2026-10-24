# AI Usage Report

# AI Usage Report

## AI Tools Used

I used Claude and Chatgpt while working on this assignment.

Claude was mainly used to help me plan the project structure and understand what files I needed, along with telling me how to change the previous blue theme to burgundy and chase the font colors.

Chatgpt helped me review my code and make changes. 

I made sure that the final project was not simply copied from an AI response. AI was used as a tool.

| ID | Tool (model) | Date | Purpose | Files affected | What I changed and how I verified it |
|---|---|---|---|---|---|
| C01 | Claude Sonnet 5.5 | 2026-10-17 | Conversation about restyling my Assignment 1 portfolio: burgundy theme, project banners, off-white pink text, corner decoration, and explaining a button difference. | - | - |
| A01 | Claude Sonnet 5.5 | 2026-10-17 | I asked if the whole site could be burgundy. Claude explained that my colours are CSS variables and gave a burgundy dark and light palette | css | I pasted the colour blocks into my file and kept my own --radius and --max-width lines. I verified by opening index.html in Chrome and checking the dark and light theme |
| A02 | Claude Sonnet 5.5 | 2026-10-17 | I pasted my edited styles.css and asked "is this ok". Claude reviewed it and suggested changing the solid button gradient so the white text stays readable | css | i applied the suggested change and I checked the button in Chrome |
| A03 | Claude Sonnet 5.5 | 2026-10-17 | My project banners were still blue and purple because they are separate images. Claude drew replacement SVGs: first burgundy, then plain bronze, then a bronze gradient, then the labels in off-white pink | assets/images/project1.svg, project2.svg, project3.svg | I decided the colours (I rejected the blue and purple, then asked for bronze, then for a gradient bronze) and replaced the files in my folder. I verified by refreshing the page in Chrome and checking all three cards and used the gradient bronze |
| A04 | Claude Sonnet 5.5 | 2026-10-17 | I asked why one hero button looks different and asked for off-white pink text. Claude explained that the two buttons are the primary and secondary styles and gave new colour values and the solid button text | css | I applied the new text colours. I verified in Chrome that the headings, nav links and card text are no longer pure white |
| A05 | Claude Sonnet 5.5 | 2026-10-17 | I asked how to add decorative swirls in the corners. Claude gave a first simple swirl SVG and CSS to place it | swirl.svg and swirls.css (given by Claude) | I did not use this version. It was not the style I wanted, so I sent Claude a reference drawing and asked for something like it. It is included in my evidence ZIP as an unused artifact |
| A06 | Claude Sonnet 5.5 | 2026-10-17 | After I sent a reference image of a hand-drawn floral flourish, Claude drew an original SVG vine with curls, dots and a flower, plus CSS to place it in two corners behind the content | none | i ended up disliking the style and did not use it at all |
| C02 | ChatGPT (Codex, GPT-6) | 2026-10-19 to 2026-10-25 | Reviewed my Assignment 1 portfolio and explained the Assignment 2 requirements and code. | No files were edited directly by ChatGPT. | I adapted the suggestions into my project and tested the completed features in a browser. it worked as expected. |
| A07 | ChatGPT (Codex, GPT-6) | 2026-10-19 to 2026-10-25 | Suggested live project search with a clear button, result count, and no-results message. | index.html, js/script.js, css/styles.css | I adapted the search code to my project cards and tested matching searches, no matches, and clearing the search. They worked as expected. |
| A08 | ChatGPT (Codex, GPT-6) | 2026-10-19 to 2026-10-25 | Suggested scroll-reveal effects using IntersectionObserver, including showing content when the observer is supported. | js/script.js, css/styles.css | I added the reveal-ready class after creating the observer and tested the reveal effect while scrolling. It worked as expected. |
| A09 | ChatGPT (Codex, GPT-6) | 2026-10-19 to 2026-10-25 | Suggested hover effects for project cards, buttons, and skills, with reduced-motion support. | css/styles.css | I adapted the hover styles and tested them on the project cards, buttons, and skills. They worked as expected. |
| A010 | ChatGPT (Codex, GPT-6) | 2026-10-19 to 2026-10-25 | Suggested fade-in animations for form error and status messages. | css/styles.css | I adapted the animation styles and tested the form messages. They appeared as expected. |


Declaration
Name: Sidrah Sanaullah
Student ID: 202462320
Date: 25 October 2026
I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.