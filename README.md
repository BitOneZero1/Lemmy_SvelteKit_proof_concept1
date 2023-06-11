# Lemmy social media SvelteKit proof of concept

This is a very simple example of SvelteKit code to access Lemmy API via HTTP

It started with: (You do not need to do this command)  
npm create svelte@latest

Then lemmy client and example routes were added. You can review the code commit logs.

# Download and setup

    git clone https://github.com/BitOneZero1/Lemmy_SvelteKit_proof_concept1.git
    cd Lemmy_SvelteKit_proof_concept1/
    npm install

You need to create a .env file in your project root with Lemmy server, username, password.
env_example serves as an example .env file

To test locally:

    npm run dev -- --open


# In web browser /login

/login page shows how to do a client login to Lemmy server and shows the communities that the speivied user has joined.
