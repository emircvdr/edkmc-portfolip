interface TimelineItem {
    title: string;
    description: string;
    date: string;
    status: "completed" | "pending" | "failed";
}

const timelineData: TimelineItem[] = [
    {
        title: "Long Term Intern",
        description: "During my long-term internship at Turkcell, I utilized ERP and MySQL systems extensively. I conducted data analysis andoptimization using Python, and developed and implemented several automated reporting systems.",
        date: "Nov 2023 - June 2024",
        status: "completed",
    },
    {
        title: "Intern",
        description: "",
        date: "Aug 2023 - Oct 2023",
        status: "completed",
    },
];

const statusColors = {
    completed: "bg-gray-500",
    pending: "bg-yellow-500",
    failed: "bg-red-500",
};

export function TurkcelTimeLine() {
    return (
        <div className="relative border-l border-gray-200  ml-2 mt-2">
            {timelineData.map((item, index) => (
                <div key={index} className="mb-8 ml-3">
                    <div
                        className={`absolute w-3 h-3 rounded-full -left-1.5 top-1.5 ${statusColors[item.status]}`}></div>
                    <div className="p-4 bg-white  border-gray-200 rounded-lg  ">
                        <h3 className="text-lg font-semibold text-gray-900 ">
                            {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 ">
                            {item.description}
                        </p>
                        <time className="mt-2 text-xs text-gray-400 ">
                            {item.date}
                        </time>
                    </div>
                </div>
            ))}
        </div>
    );
}
