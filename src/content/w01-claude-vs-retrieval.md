## Claude vs your knowledge base: not the same tool

Your Confluence or ServiceNow KB retrieves documents — you search, it returns what exists. Claude generates responses — there's no document it's pulling from, only patterns it learned during training.

This distinction matters operationally. When an analyst searches your KB for "VPN error 691," they get your org's specific resolution steps. When they ask Claude the same question in base chat mode, Claude generates a plausible answer from general training data — which may not match your environment at all.

However, Claude's operating mode changes everything. With file upload, Claude can read a document you paste in. With Claude Projects, it can reference a persistent set of your team's SOPs and definitions. With web search enabled, it can retrieve current information. The capabilities vary significantly depending on what your organisation has turned on.

Before rolling Claude out to your team, confirm which mode is active. The question to ask your IT or vendor contact: "Is this base chat only, or does our instance have Projects, file upload, or web search enabled?"

**Manager takeaway: base Claude generates — it does not retrieve. Know your org's configuration before making promises to your team about what Claude can access.**
