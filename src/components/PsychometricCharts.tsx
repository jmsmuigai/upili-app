"use client"

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

export function PsychometricCharts({ data }: { data: any }) {
    if (!data) return null;

    const chartData = [
        { subject: 'Logic', A: data.logic || 50, fullMark: 100 },
        { subject: 'Creativity', A: data.creativity || 50, fullMark: 100 },
        { subject: 'Leadership', A: data.confidence || 50, fullMark: 100 },
        { subject: 'Empathy', A: 75, fullMark: 100 },
        { subject: 'Tech', A: 85, fullMark: 100 },
        { subject: 'Art', A: 65, fullMark: 100 },
    ];

    return (
        <Card className="bg-white/5 border-white/10 overflow-hidden">
            <CardContent className="p-4 h-[300px]">
                <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest text-center">Psychometric Radar</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                        <PolarGrid stroke="#ffffff20" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                            name="Talent Profile"
                            dataKey="A"
                            stroke="#8b5cf6"
                            strokeWidth={3}
                            fill="#8b5cf6"
                            fillOpacity={0.3}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
                            itemStyle={{ color: '#fff' }}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
