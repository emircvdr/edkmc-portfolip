interface TimelineItem {
    title: string;
    description: string;
    date: string;
    status: "completed" | "pending" | "failed";
}

const timelineData: TimelineItem[] = [
    {
        title: "Team Captain",
        description: "As captain of the Arma team, I led our Technofest finals journey, developing an autonomous UAV. I managed the budget, secured sponsors, and worked on avionics and software, using OpenCV for image processing and ROS/Gazebo for simulations, while honing my RC piloting skills.",
        date: "2022 - 2024",
        status: "completed",
    },
];

const statusColors = {
    completed: "bg-gray-500",
    pending: "bg-yellow-500",
    failed: "bg-red-500",
};

export function Timeline() {
    return (
        <div className="relative border-l border-gray-200ml-2 mt-2">
            {timelineData.map((item, index) => (
                <div key={index} className="mb-8 ml-3">
                    <div
                        className={`absolute w-3 h-3 rounded-full -left-1.5 top-1.5 ${statusColors[item.status]
                            }`}
                    ></div>

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
