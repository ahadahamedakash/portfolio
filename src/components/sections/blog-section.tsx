"use client";

import { motion } from "motion/react";
import { Calendar, ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "../section-heading";

const blogPosts = [
  {
    id: "1",
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn how to structure your React applications for maximum scalability and maintainability using TypeScript and modern development practices.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    featured: true,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "2",
    title: "The Complete Guide to Next.js App Router",
    excerpt:
      "Dive deep into Next.js 13's new App Router, exploring its features, benefits, and how to migrate from the Pages Router.",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "Next.js",
    featured: true,
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    id: "3",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt:
      "Discover advanced Tailwind CSS techniques to create beautiful, responsive designs while maintaining clean and maintainable code.",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "CSS",
    featured: false,
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export function BlogSection() {
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <section id="blog" className="bg-muted/70">
      <div className="container section-padding">
        <SectionHeading
          title="Latest Blog Posts"
          subtitle="Sharing my knowledge and insights about web development"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 opacity-60">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-50`}
                />

                {/* Content */}
                <div className="relative p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">Ahad Ahamed</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary-foreground hover:bg-primary"
                      disabled
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
