"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, ThumbsUp, Send } from 'lucide-react';
import { BrainGym } from '@/components/BrainGym';

const INITIAL_POSTS = [
    { id: 1, user: "Amani_Ke", content: "Is it true that coding is part of the new CBC curriculum for Grade 10?", votes: 45, replies: 12 },
    { id: 2, user: "Nairobi_Student", content: "Which schools in Mombasa offer Aviation Technology?", votes: 32, replies: 8 },
    { id: 3, user: "Daudi123", content: "I got a 'ME1' in Science. Can I still pursue Medicine?", votes: 89, replies: 24 }
];

export default function BungePage() {
    const [posts, setPosts] = useState(INITIAL_POSTS);
    const [newPost, setNewPost] = useState("");
    const [onlineUsers, setOnlineUsers] = useState(1240);

    // Simulate "Live" user count
    useEffect(() => {
        const interval = setInterval(() => {
            setOnlineUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handlePost = () => {
        if (!newPost.trim()) return;
        const post = {
            id: Date.now(),
            user: "You (Guest)",
            content: newPost,
            votes: 0,
            replies: 0
        };
        setPosts([post, ...posts]);
        setNewPost("");
    };

    const handleVote = (id: number) => {
        setPosts(posts.map(p => p.id === id ? { ...p, votes: p.votes + 1 } : p));
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 pt-24 neural-bg">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Left Sidebar: Live Stats */}
                <div className="hidden lg:block space-y-4">
                    <Card className="bg-white/5 border-white/10">
                        <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-bold text-gray-300">Live Users</span>
                            </div>
                            <span className="text-xl font-mono text-green-400">{onlineUsers.toLocaleString()}</span>
                        </CardContent>
                    </Card>
                    <BrainGym />
                </div>

                {/* Main Content: Feed */}
                <div className="lg:col-span-2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center lg:text-left mb-6"
                    >
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
                            Bunge 🏛️
                        </h1>
                        <p className="text-gray-400 text-sm">The Student Parliament. Ask. Answer. Succeed.</p>
                    </motion.div>

                    {/* Post Input */}
                    <div className="flex gap-2 p-4 bg-white/5 rounded-xl border border-white/10">
                        <Input
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                            placeholder="What's on your mind?"
                            className="bg-transparent border-none text-white focus-visible:ring-0"
                        />
                        <Button size="icon" variant="neon" onClick={handlePost}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Feed */}
                    <div className="space-y-4">
                        {posts.map(post => (
                            <motion.div
                                key={post.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-4 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-upili-300 text-sm">@{post.user}</span>
                                    <span className="text-xs text-gray-500">Just now</span>
                                </div>
                                <p className="text-gray-100 mb-4">{post.content}</p>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => handleVote(post.id)}
                                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-green-400 transition-colors"
                                    >
                                        <ThumbsUp className="h-3 w-3" /> {post.votes}
                                    </button>
                                    <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-blue-400 transition-colors">
                                        <MessageSquare className="h-3 w-3" /> {post.replies} Replies
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar: Recommended Groups */}
                <div className="space-y-4">
                    <Card className="bg-white/5 border-white/10 p-4">
                        <h3 className="font-bold text-white mb-3 text-sm">Trending Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {["#JSEA2025", "#Engineering", "#Mombasa", "#Scholarships"].map(tag => (
                                <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded-full text-blue-300 hover:bg-blue-500/20 cursor-pointer">{tag}</span>
                            ))}
                        </div>
                    </Card>
                    {/* Mobile Only Live Stats */}
                    <div className="lg:hidden">
                        <BrainGym />
                    </div>
                </div>
            </div>
        </div>
    );
}
