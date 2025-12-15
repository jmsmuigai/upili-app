import GeminiSubjectView from "@/components/GeminiSubjectView";

export default function Page({ params }: { params: { id: string } }) {
    // Decode the subject name from URL (e.g., "Computer%20Studies" -> "Computer Studies")
    const subjectName = decodeURIComponent(params.id);

    return <GeminiSubjectView subject={subjectName} />;
}
