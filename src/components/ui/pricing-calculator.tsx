import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Button } from "./button"
import { Slider } from "./slider"
import { Badge } from "./badge"

interface PricingCalculatorProps {
  className?: string
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ className }) => {
  const [users, setUsers] = useState(10)
  const [campaigns, setCampaigns] = useState(50)
  
  const calculatePrice = () => {
    const basePrice = 29
    const userPrice = Math.max(0, (users - 5) * 3)
    const campaignPrice = Math.max(0, (campaigns - 25) * 0.5)
    return Math.round(basePrice + userPrice + campaignPrice)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Card variant="glass" className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Pricing Calculator</CardTitle>
          <div className="text-center">
            <span className="text-3xl font-bold text-primary">${calculatePrice()}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Team Members</label>
              <Badge variant="secondary">{users} users</Badge>
            </div>
            <Slider
              value={[users]}
              onValueChange={(value) => setUsers(value[0])}
              max={100}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Monthly Campaigns</label>
              <Badge variant="secondary">{campaigns} campaigns</Badge>
            </div>
            <Slider
              value={[campaigns]}
              onValueChange={(value) => setCampaigns(value[0])}
              max={500}
              min={10}
              step={5}
              className="w-full"
            />
          </div>

          <div className="pt-4 border-t border-border/50">
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>Base Plan</span>
                <span>$29</span>
              </div>
              {users > 5 && (
                <div className="flex justify-between">
                  <span>Extra Users ({users - 5})</span>
                  <span>${(users - 5) * 3}</span>
                </div>
              )}
              {campaigns > 25 && (
                <div className="flex justify-between">
                  <span>Extra Campaigns ({campaigns - 25})</span>
                  <span>${Math.round((campaigns - 25) * 0.5)}</span>
                </div>
              )}
            </div>
          </div>

          <Button variant="hero" className="w-full" size="lg">
            Start Free Trial
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}