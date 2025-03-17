import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "resume | rohanth marem",
    description: "My professional experience and skills",
};

export default function ResumePage() {
    return (
        <section>
            <h1 className="font-medium text-2xl mb-8 tracking-tighter">
                resume
            </h1>

            {/* PDF preview */}
            <div className="mb-12">
                <iframe
                    src="/resume.pdf"
                    width="100%"
                    height="600px"
                    className="border rounded"
                    title="rohanth's resume"
                />
            </div>

            {/* <div className="prose prose-neutral dark:prose-invert">
                <div className="mb-8">
                    <h2 className="text-xl font-medium">Summary</h2>
                    <p className="text-neutral-800 dark:text-neutral-200">
                        A brief summary of your professional background and expertise.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-medium">Experience</h2>

                    <div className="mt-4 mb-6">
                        <h3 className="text-lg font-medium">Job Title</h3>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                            Company Name • 2020 - Present
                        </div>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Responsibility or achievement</li>
                            <li>Responsibility or achievement</li>
                            <li>Responsibility or achievement</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-medium">Previous Job Title</h3>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                            Previous Company • 2018 - 2020
                        </div>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Responsibility or achievement</li>
                            <li>Responsibility or achievement</li>
                            <li>Responsibility or achievement</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-medium">Education</h2>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium">Degree</h3>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                            University • Graduation Year
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-medium">Skills</h2>
                    <ul className="list-disc ml-6 mt-2">
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                        <li>Skill 3</li>
                        <li>Skill 4</li>
                    </ul>
                </div>
            </div> */}
        </section>
    );
}
