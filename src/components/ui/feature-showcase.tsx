import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"
import { LucideIcon } from "lucide-react"

interface FeatureShowcaseProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  badge?: string
  className?: string
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  title,
  description,
  icon: Icon,
  features,
  badge,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card variant="feature" className="h-full group">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              {badge && (
                <Badge variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              )}
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold font-display group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}