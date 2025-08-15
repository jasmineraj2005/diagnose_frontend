"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, HelpCircle, Trash2 } from "lucide-react"

export default function ChatbotPage() {
  const [message, setMessage] = useState("")

  const sampleQuestions = [
    "What diseases have been studied in relation to the nasal microbiome and mycobiome of COPD patients?",
    "How does the nasal fungal mycobiome vary with different clinical characteristics in COPD patients?",
    'What is the corresponding author of the paper "Differences of the Nasal Microbiome and Mycobiome by Clinical Characteristics of COPD Patients"?',
    'Who wrote the paper about "Clara cell protein in nasal lavage fluid and nasal nitric oxide - biomarkers with anti-inflammatory properties in allergic rhinitis"?',
    'What is the sampling method for "Comparative Analysis of Nasosorption and Sponge Sampling Methods for Nasal Fluid Cytokine Profiling in Upper Airway Disease"?',
    'What is the population description of "LDH Concentration in Nasal-Wash Fluid as a Biochemical Predictor of Bronchiolitis Severity"?',
    'What institute conducted the research on "Molecular profiling of the human nasal epithelium: A proteomics approach"?',
    "What papers were published in PLoS ONE?",
    "Research papers published in 2014",
    "Find research papers from University of California",
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-25 to-emerald-50">
        <div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white/12 rounded-full backdrop-blur-sm"
          style={{
            animation: "floatBlur 12s ease-in-out infinite, driftLarge 20s linear infinite",
            filter: "blur(2px)",
          }}
        ></div>

        <div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-200/15 rounded-full backdrop-blur-sm"
          style={{
            animation: "floatBlur 9s ease-in-out infinite reverse, driftMedium 15s linear infinite reverse",
            filter: "blur(1.5px)",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-200/18 rounded-full backdrop-blur-sm"
          style={{
            animation: "floatBlur 11s ease-in-out infinite, driftSmall 18s linear infinite",
            filter: "blur(1.8px)",
          }}
        ></div>

        <div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-teal-100/20 rounded-full backdrop-blur-sm"
          style={{
            animation: "floatBlur 8s ease-in-out infinite, driftTiny 12s linear infinite reverse",
            filter: "blur(1px)",
          }}
        ></div>

        <div
          className="absolute bottom-1/2 left-1/4 w-32 h-32 bg-cyan-100/25 rounded-full backdrop-blur-sm"
          style={{
            animation: "floatBlur 7s ease-in-out infinite reverse, driftExtra 14s linear infinite",
            filter: "blur(0.8px)",
          }}
        ></div>

        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/3 w-3 h-3 bg-teal-300 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatBlur {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) scale(1);
            filter: blur(1.5px);
          }
          25% { 
            transform: translate(-50%, -50%) translateY(-40px) scale(1.03);
            filter: blur(2.5px);
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-20px) scale(1.08);
            filter: blur(1px);
          }
          75% { 
            transform: translate(-50%, -50%) translateY(-35px) scale(1.05);
            filter: blur(2px);
          }
        }
        
        @keyframes driftLarge {
          0% { transform: translate(-50%, -50%) translateX(0px) translateY(0px) rotate(0deg); }
          25% { transform: translate(-50%, -50%) translateX(30px) translateY(-20px) rotate(90deg); }
          50% { transform: translate(-50%, -50%) translateX(0px) translateY(-40px) rotate(180deg); }
          75% { transform: translate(-50%, -50%) translateX(-30px) translateY(-20px) rotate(270deg); }
          100% { transform: translate(-50%, -50%) translateX(0px) translateY(0px) rotate(360deg); }
        }
        
        @keyframes driftMedium {
          0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          33% { transform: translateX(25px) translateY(-20px) rotate(120deg); }
          66% { transform: translateX(-20px) translateY(15px) rotate(240deg); }
          100% { transform: translateX(0px) translateY(0px) rotate(360deg); }
        }
        
        @keyframes driftSmall {
          0% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(-25px) translateY(-25px) rotate(180deg); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        
        @keyframes driftTiny {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(20px) translateY(15px); }
          50% { transform: translateX(-15px) translateY(-20px); }
          75% { transform: translateX(-20px) translateY(8px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        
        @keyframes driftExtra {
          0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          40% { transform: translateX(18px) translateY(-12px) rotate(144deg); }
          80% { transform: translateX(-12px) translateY(18px) rotate(288deg); }
          100% { transform: translateX(0px) translateY(0px) rotate(360deg); }
        }
      `}</style>

      <div className="relative z-10 flex flex-col h-screen">
        <div className="flex-1 flex flex-col items-center justify-start pt-16 md:pt-20 p-4 md:p-8">
          <div className="text-center max-w-2xl">
            <div className="flex items-center justify-center">
              <img src="/images/diag-nose-logo-bw.png" alt="Diag-nose.io" className="h-28 md:h-36 lg:h-40" />
            </div>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">Research Assistant</p>

            <div className="mt-4 md:mt-8 mb-8 md:mb-12 px-4 md:px-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-8 leading-tight">
                Eliminating respiratory disease. Forever.
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl mx-auto font-light">
                Mapping the unified airway to deliver AI-powered precision diagnostics and discover life-changing
                therapies.
              </p>
            </div>

            <div className="w-full max-w-2xl mx-auto px-4 md:px-0">
              <div className="flex gap-2 md:gap-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Search for research..."
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-gray-800 placeholder:text-gray-500 text-sm md:text-base"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      console.log("Sending message:", message)
                      setMessage("")
                    }
                  }}
                />
                <Button
                  size="sm"
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 md:px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => {
                    console.log("Sending message:", message)
                    setMessage("")
                  }}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 max-w-xs md:max-w-sm">
          <Card className="w-72 md:w-80 bg-white/90 backdrop-blur-md border-white/50 shadow-2xl rounded-2xl">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
                <CardTitle className="text-base md:text-lg font-semibold text-gray-800">How to Use</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs md:text-sm text-gray-600 mb-3">Try these sample queries:</p>
              <div className="space-y-2 max-h-32 md:max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {sampleQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="text-xs text-gray-700 p-2 md:p-3 bg-gray-50/80 rounded-xl hover:bg-emerald-50/80 cursor-pointer transition-all duration-200 border border-gray-200/50 hover:border-emerald-200/50 hover:shadow-sm"
                    onClick={() => setMessage(question)}
                  >
                    <span className="font-medium text-emerald-600">{index + 1}.</span> {question}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/90 backdrop-blur-md border-white/50 hover:bg-white/95 text-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 text-xs md:text-sm"
            >
              <Trash2 className="w-4 h-4" />
              Clear Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
