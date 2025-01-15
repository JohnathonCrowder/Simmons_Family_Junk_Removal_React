import React from "react";

const BlogHero: React.FC = () => {
  return (
    <div className="relative -mt-24 w-full">
      <style>
        {`
          .hex-grid {
            --hex-size: 60px;
            --hex-gap: 4px;
            --hex-color: rgba(33, 150, 243, 0.1);
            --hex-border: rgba(33, 150, 243, 0.2);
            background-color: transparent;
            background-image: 
              linear-gradient(60deg, var(--hex-border) 1px, transparent 1px),
              linear-gradient(-60deg, var(--hex-border) 1px, transparent 1px),
              linear-gradient(60deg, var(--hex-color) 25%, transparent 25%, transparent 75%, var(--hex-color) 75%);
            background-size: calc(var(--hex-size) + var(--hex-gap)) calc(var(--hex-size) + var(--hex-gap));
            animation: hexMove 30s linear infinite;
          }

          @keyframes hexMove {
            from { background-position: 0 0; }
            to { background-position: var(--hex-size) calc(var(--hex-size) * 1.73); }
          }

          .title-glitch {
            animation: glitchText 3s infinite;
          }

          .title-glitch::before,
          .title-glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .title-glitch::before {
            animation: glitchText 2s infinite;
            color: #ff0080;
            clip: rect(24px, 550px, 90px, 0);
          }

          .title-glitch::after {
            animation: glitchText 3s infinite;
            color: #2196f3;
            clip: rect(85px, 550px, 140px, 0);
          }

          @keyframes glitchText {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }

          .binary-rain {
            position: absolute;
            color: rgba(33, 150, 243, 0.3);
            font-family: monospace;
            font-size: 14px;
            line-height: 1;
            white-space: nowrap;
            animation: binaryRain 20s linear infinite;
            animation-delay: calc(var(--delay) * -1s);
          }

          @keyframes binaryRain {
            from { transform: translateY(-100%); }
            to { transform: translateY(1000px); }
          }

          .network-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: drawLine 4s ease forwards;
          }

          @keyframes drawLine {
            to { stroke-dashoffset: 0; }
          }
        `}
      </style>

      <div className="relative h-screen overflow-hidden bg-cyber-darker">
        {/* Hexagonal Grid Background */}
        <div className="absolute inset-0 hex-grid opacity-50"></div>

        {/* Binary Rain Effect */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="binary-rain"
            style={
              {
                left: `${i * 2.5}%`,
                "--delay": Math.random() * 20,
              } as React.CSSProperties
            }
          >
            {[...Array(20)].map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
            ))}
          </div>
        ))}

        {/* Vertical Accent Lines */}
        <div className="absolute inset-0 flex justify-between">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-px bg-gradient-to-b from-transparent via-neon-blue/20 to-transparent"
            ></div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-[2000px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="relative lg:ml-[10%]">
                <div className="mb-6 flex items-center space-x-4">
                  <div className="h-px w-12 bg-neon-blue"></div>
                  <div className="text-neon-blue font-mono text-sm tracking-wider">
                    FUSION CODE LAB BLOG
                  </div>
                </div>
                <h1
                  className="relative text-6xl lg:text-8xl font-bold mb-6 title-glitch"
                  data-text="Digital Insights"
                >
                  <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                    Digital Insights
                  </span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-xl">
                  Exploring the frontiers of technology through expert insights,
                  tutorials, and in-depth analysis. Your gateway to mastering
                  modern development.
                </p>
              </div>

              {/* Animated Visualization */}
              <div className="hidden lg:block relative lg:mr-[10%]">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-[100px]"></div>
                <svg viewBox="0 0 500 500" className="w-full max-w-2xl mx-auto">
                  <defs>
                    <linearGradient
                      id="sphereGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#2196f3" stopOpacity="0.5">
                        <animate
                          attributeName="stopOpacity"
                          values="0.5;0.8;0.5"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </stop>
                      <stop offset="100%" stopColor="#b624ff" stopOpacity="0.5">
                        <animate
                          attributeName="stopOpacity"
                          values="0.5;0.8;0.5"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </stop>
                    </linearGradient>
                  </defs>

                  {/* Complex Network Visualization */}
                  <g transform="translate(250, 250)">
                    {[...Array(12)].map((_, i) => (
                      <React.Fragment key={i}>
                        <circle
                          cx={Math.cos((i * Math.PI) / 6) * 150}
                          cy={Math.sin((i * Math.PI) / 6) * 150}
                          r="6"
                          fill="#2196f3"
                        >
                          <animate
                            attributeName="r"
                            values="6;8;6"
                            dur="2s"
                            repeatCount="indefinite"
                            begin={`${i * 0.2}s`}
                          />
                        </circle>
                        {[...Array(12)].map((_, j) => (
                          <line
                            key={j}
                            x1={Math.cos((i * Math.PI) / 6) * 150}
                            y1={Math.sin((i * Math.PI) / 6) * 150}
                            x2={Math.cos((j * Math.PI) / 6) * 150}
                            y2={Math.sin((j * Math.PI) / 6) * 150}
                            stroke="url(#sphereGradient)"
                            strokeWidth="1"
                            className="network-line"
                            style={{ animationDelay: `${(i + j) * 0.1}s` }}
                          />
                        ))}
                      </React.Fragment>
                    ))}

                    {/* Center Node */}
                    <circle r="15" fill="url(#sphereGradient)">
                      <animate
                        attributeName="r"
                        values="15;18;15"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Specs Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-cyber-darker/80 backdrop-blur-sm border-t border-neon-blue/20">
          <div className="max-w-[2000px] mx-auto px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "QUANTUM CORES", value: "1024" },
                { label: "NEURAL LINKS", value: "∞" },
                { label: "DATA STREAMS", value: "42TB/s" },
                { label: "UPTIME", value: "99.99%" },
              ].map((spec, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-mono font-bold text-neon-blue">
                    {spec.value}
                  </div>
                  <div className="text-gray-400 text-sm tracking-wider">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
