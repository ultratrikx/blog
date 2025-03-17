import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "values | rohanth marem",
    description: "My personal and professional values",
};

export default function ValuesPage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                values
            </h1>
            <div className="prose prose-neutral dark:prose-invert">
                <p>
                    These core values guide my personal and professional life,
                    shaping my decisions and interactions.
                </p>

                <h2>Intellectual Curiosity</h2>
                <p>
                    I believe in continuous learning and questioning
                    assumptions. Understanding how and why things work is
                    central to my approach to problem-solving.
                </p>
                <ul>
                    <li>
                        Asking thoughtful questions rather than rushing to
                        answers
                    </li>
                    <li>
                        Maintaining a beginner's mindset even in areas of
                        expertise
                    </li>
                    <li>
                        Valuing depth of understanding over surface-level
                        knowledge
                    </li>
                </ul>

                <h2>Craftsmanship</h2>
                <p>
                    I care deeply about the quality of my work and believe in
                    doing things well for their own sake.
                </p>
                <ul>
                    <li>
                        Building solutions that are elegant, maintainable, and
                        robust
                    </li>
                    <li>
                        Taking pride in the details that others might overlook
                    </li>
                    <li>
                        Balancing perfectionism with practicality and delivery
                    </li>
                </ul>

                <h2>Integrity</h2>
                <p>
                    Honesty and ethical conduct are foundational to meaningful
                    relationships and sustainable success.
                </p>
                <ul>
                    <li>Communicating transparently, even when difficult</li>
                    <li>Following through on commitments</li>
                    <li>
                        Making decisions that align with long-term values rather
                        than short-term gains
                    </li>
                </ul>

                <h2>Empathy</h2>
                <p>
                    Understanding the needs, constraints, and perspectives of
                    others is essential for effective collaboration and
                    meaningful work.
                </p>
                <ul>
                    <li>Listening to understand rather than to respond</li>
                    <li>
                        Considering diverse viewpoints when making decisions
                    </li>
                    <li>Designing with users' needs at the center</li>
                </ul>

                <h2>Balance</h2>
                <p>
                    I believe in sustainable effort and finding harmony between
                    different aspects of life.
                </p>
                <ul>
                    <li>
                        Recognizing that well-being enables long-term excellence
                    </li>
                    <li>Balancing deep focus with broad awareness</li>
                    <li>Making time for reflection and renewal</li>
                </ul>

                <h3>Putting Values into Practice</h3>
                <p>
                    These values aren't abstract ideals but living principles
                    that guide my daily decisions and actions. I regularly
                    reflect on how well my work and interactions align with
                    these values, using them as a compass rather than a
                    checklist.
                </p>
            </div>
        </section>
    );
}
