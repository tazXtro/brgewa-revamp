import { Clock, MoreHorizontal } from "lucide-react";

interface Appointment {
    id: string;
    patientName: string;
    doctorName: string;
    department: string;
    date: string;
    time: string;
    status: "scheduled" | "completed" | "cancelled" | "in-progress";
}

const appointments: Appointment[] = [
    {
        id: "APT001",
        patientName: "Abdul Karim",
        doctorName: "Dr. Mohammad Ali",
        department: "General Medicine",
        date: "2026-01-04",
        time: "10:00 AM",
        status: "in-progress",
    },
    {
        id: "APT002",
        patientName: "Fatema Akter",
        doctorName: "Dr. Fatema Begum",
        department: "Gynecology",
        date: "2026-01-04",
        time: "11:30 AM",
        status: "scheduled",
    },
    {
        id: "APT003",
        patientName: "Rahman Uddin",
        doctorName: "Dr. Suratuzzaman",
        department: "Cardiology",
        date: "2026-01-04",
        time: "02:00 PM",
        status: "scheduled",
    },
    {
        id: "APT004",
        patientName: "Nasreen Begum",
        doctorName: "Dr. Mohammad Ismail",
        department: "Orthopedics",
        date: "2026-01-04",
        time: "03:30 PM",
        status: "scheduled",
    },
    {
        id: "APT005",
        patientName: "Jahangir Alam",
        doctorName: "Dr. Mohammad Ali",
        department: "General Medicine",
        date: "2026-01-03",
        time: "09:00 AM",
        status: "completed",
    },
];

const statusStyles = {
    scheduled: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    completed: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    cancelled: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    "in-progress": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

const statusLabels = {
    scheduled: "Scheduled",
    completed: "Completed",
    cancelled: "Cancelled",
    "in-progress": "In Progress",
};

export default function AppointmentsTable() {
    return (
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-foreground">Recent Appointments</h2>
                    <p className="text-sm text-muted-foreground">Today&apos;s scheduled visits</p>
                </div>
                <button className="text-sm font-semibold text-primary hover:text-accent transition-colors">
                    View All →
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-muted/30">
                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Patient
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Doctor
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Department
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Time
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {appointments.map((appointment) => (
                            <tr
                                key={appointment.id}
                                className="hover:bg-muted/20 transition-colors"
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                                            <span className="text-sm font-semibold text-primary">
                                                {appointment.patientName.split(" ").map(n => n[0]).join("")}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground">
                                                {appointment.patientName}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                ID: {appointment.id}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p className="text-sm font-medium text-foreground">
                                        {appointment.doctorName}
                                    </p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p className="text-sm text-muted-foreground">
                                        {appointment.department}
                                    </p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock size={14} />
                                        <span>{appointment.time}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[appointment.status]
                                            }`}
                                    >
                                        {statusLabels[appointment.status]}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <button className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
