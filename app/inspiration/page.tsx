import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "inspiration | rohanth marem",
    description: "People, ideas, and works that inspire me",
};

export default function InspirationPage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                inspiration
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                {/* <h2>Creative Influences</h2>
                <p>
                    My creative journey has been shaped by various influences
                    across different mediums and disciplines. These inspirations
                    have informed my perspective and approach to
                    problem-solving.
                </p> */}

                <h3>my top 3 goats</h3>
                <ul>
                    <li>
                        <strong>Richard Hamming</strong> — his ideas on
                        cultivating technical curiosity and the importance
                        understanding the principles behind the work you do
                        resonate with me in my projects
                    </li>
                    <li>
                        <strong>James Vowles</strong> — his leadership and
                        compsure when bringing back the williams f1 team to its
                        former glory inspire me to do the same in my work. his
                        attention to detail and focus on long-term results are
                        qualities i admire.
                    </li>
                    <li>
                        <strong>Kobe</strong> — his work ethic and dedication to
                        his craft are qualities i strive to emulate in my work
                        and sport.
                    </li>
                </ul>

                {/* <h2>Books That Changed My Thinking</h2>
                <p>
                    These books have been particularly influential in shaping my
                    worldview and approach to work:
                </p>

                <ul>
                    <li>
                        <strong>Thinking in Systems</strong> by Donella Meadows
                        — Changed how I understand complex interactions and
                        feedback loops in both technology and society.
                    </li>
                    <li>
                        <strong>The Design of Everyday Things</strong> by Don
                        Norman — Fundamentally shifted my understanding of how
                        humans interact with designed objects and interfaces.
                    </li>
                    <li>
                        <strong>Gödel, Escher, Bach</strong> by Douglas
                        Hofstadter — Opened my mind to connections between
                        mathematics, art, and consciousness.
                    </li>
                </ul> */}

                {/* <h2>Technical Inspirations</h2>
                <p>
                    In the realm of software and technology, I find inspiration
                    in:
                </p>

                <ul>
                    <li>
                        Open source communities and their collaborative approach
                        to building technology
                    </li>
                    <li>
                        Elegant programming languages that emphasize readability
                        and expressiveness
                    </li>
                    <li>
                        Tools that strike the right balance between simplicity
                        and power
                    </li>
                </ul>

                <h2>Philosophical Approach</h2>
                <p>My work is guided by several core philosophies:</p>

                <blockquote>
                    <p>
                        "The purpose of abstraction is not to be vague, but to
                        create a new semantic level in which one can be
                        absolutely precise." — Edsger W. Dijkstra
                    </p>
                </blockquote>

                <p>
                    I believe that technology should serve human needs, that
                    complexity should be managed through thoughtful abstraction,
                    and that good design often means knowing what to leave out.
                </p> */}
            </div>
        </section>
    );
}
