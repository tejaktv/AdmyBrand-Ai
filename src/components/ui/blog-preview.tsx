import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "./button"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  image: string
  author: {
    name: string
    avatar: string
  }
}

interface BlogPreviewProps {
  posts: BlogPost[]
  className?: string
}

export const BlogPreview: React.FC<BlogPreviewProps> = ({ posts, className }) => {
  return (
    <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card variant="hover" className="h-full group">
            <div className="aspect-video overflow-hidden rounded-t-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="font-semibold font-display line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-xs text-muted-foreground">
                      {post.author.name}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.publishedAt}
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-between group/btn">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}