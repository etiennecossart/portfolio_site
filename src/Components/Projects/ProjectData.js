// {
//     id: 1,
//     name: "",
//     stack: [],
//     date: "",
//     desction: "",
//     learnings: "",
//     planAugmt: "",
//     github: "",
//     img : URL()
// }

const projectData = [
    {
        id: 0,
        name: "Full Stack Spotify Web Chat",
        stack: ["React", "ExpressJS", "Socket.io", "Spotify API"],
        date: "June 2021 - Present",
        dscr: "By far, Spotify is the app I use the most on my phone, from discovering new artists/tracks to jamming with timeless classics, I'm always listening to something. Particularly during quarantine, I found myself sending songs I really like to friends based on their tastes and our own conversations, but there was no integrated way to create a playlist of those curated tracks. This chat functions like a regular web chat application with users in joinable rooms. Once users authenticate their Spotify account they can create a playlist of some/all of the songs sent within the chat room. This enables users to find and discover songs tied to a particular conversation or style.",
        learnings: "This project gave me hands on experience on developing full stack applications, working with web sockets, client-server communication, and third party REST API technology. Some issues/bugs that I had to resolve included CORS protocols and the chat duplicating message emit calls.",
        planAugmt: "In next releases I plan on developing chat threads (like Slack/Teams) to provide genre/conversation specific rooms. Also Spotify Search in chat to enhance finding songs to send",
        // img: URL()
    },
    {
        id: 1,
        name: "March Madness Bracket Simulator",
        stack: ["Python", "Pandas Library", "Flask"],
        date: "March 2021 - April 2021",
        dscr: "Personally, I don’t watch basketball nor do I know much about it, however I do enjoy playing with data! As a way to keep up with the craziness that is March Madness, and give myself a betting chance to win bracket tournaments, I developed a program that creates a bracket based on the KenPom college basketball dataset. The user inputs weights for each statistic corresponding to the value of that stat as well as a “coin flip range” for teams that are evenly matched, and an upset probability. The algorithm simulates the matchups and determines a winner for each game in every round and returns a completed bracket.",
        learnings: "The biggest take away from this project was learning the Pandas library: loading data from a CSV to a DataFrame, DataFrame manipulation, and indexing. Also gained more experience with Python, working with User Input and printing terminal text to improve the TUI.",
        planAugmt: "I'm interested in learning AI and plan on using this project to learn how to build a neural network. I would implement it with this project, feeding it statistics of past teams in the tournament and their performance, to find any trends and help build a better prediction for future brackets",
        github: "https://github.com/etiennecossart/MMBracketMaker",
        // img : URL()
    },
    {
        id: 2,
        name: "Venus’s Ptolemian Orbit Simulator",
        stack: ["Processing 3", "Java"],
        date: "Spring 2019",
        dscr: "In my last semester of college, I took a course on Engineering in Ancient Rome/Greece. As a final project, I decided to combine modern technology (and my Computer Science major) with ancient science to illustrate the discovery of one of antiquities most influential scientists, Ptolemy. Ptolemy was a mathematician, astrologer, and philosopher, who catalogued over 1000 stars and augmented Aristotle's model, noting that celestial objects such as planets moved in a zigzag pattern rather than circular orbits. He believed planets orbited the earth (geocentric model) but on a double pendulum motion, which is how they moved back and forth across the sky. He had also calculated all of the distances and rations of both pendulum segments for each of the planets (Mercury - Saturn). In order to accurately illustrate Ptolemy’s theory, I used his exact calculations for Venus to render the simulation.  ",
        // learnings: "",
        // github: "",
        // img : URL()
    }
]

export default projectData