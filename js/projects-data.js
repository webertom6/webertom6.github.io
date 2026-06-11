(function () {
    const projects = {
        cv1: {
            title: "Identification Chessboard Computer Vision",
            description: "Vision system for chessboard recognition, projection, segmentation and classification of pieces.",
            link: "https://github.com/webertom6/computer-vison-chessboard",
            techs_list: [
                "Near real-time analysis on video",
                "Custom YOLO model trained",
                "Application of computer vision algorithm (Hough, Morphological operation)",
                "Technology used: OpenCV, Python, ultralytics YOLOv11"
            ],
            image: {
                url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/yolo_hull_cluster.png?raw=true",
                alt: "Chessboard Computer Vision"
            }
        },
        cv2: {
            title: "Identification Chessboard Computer Vision",
            description: "Vision system for chessboard recognition, projection, segmentation and classification of pieces.",
            link: "https://github.com/webertom6/computer-vison-chessboard",
            techs_list: [
                "Near real-time analysis on video",
                "Custom YOLO model trained",
                "Application of computer vision algorithm (Hough, Morphological operation)",
                "Technology used: OpenCV, Python, ultralytics YOLOv11"
            ],
            image: [
                { url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/stickers_color_overlay.png?raw=true", alt: "Chessboard Computer Vision" },
                { url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/stickers_hsv_overlay.png?raw=true", alt: "Chessboard Computer Vision" },
                { url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/yolo_hull_cluster.png?raw=true", alt: "Chessboard Computer Vision" },
                { url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/warped_seg.png?raw=true", alt: "Chessboard Computer Vision" },
                { url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/exclude_white_black_frame.png?raw=true", alt: "Chessboard Computer Vision" },
                { url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/chessboard_cleaning_examples.png?raw=true", alt: "Chessboard Computer Vision" }
            ]
        },
        mlops: {
            title: "Wattwise : MLOps on forecasting renewable energy",
            description: "A full-stack MLOps solution to forecast energy consumption and weather-related variables across European countries using machine learning. This project integrates automated model training and deployment using Google Cloud Platform. This was developped using a GitFlow approach.",
            link: "https://github.com/webertom6/wattwise-mlops",
            techs_list: [
                "Retrieve and update environmental dataset using API.",
                "ML pipeline ingests energy and meteorological data for training, monitoring and predictions.",
                "CI/CD to quality and functionality of project.",
                "Technology Used : VertexAI, API, Google Cloud."
            ],
            image: {
                url: "https://github.com/webertom6/wattwise-mlops/blob/main/img/vertex_ai_pipeline.png?raw=true",
                alt: "Vertex AI Pipeline"
            }
        },
        medImaging: {
            title: "fMRI artifacts detection",
            description: "Automatic tool detect problematic volumes in a series of images from functional MRI sequences",
            link: "https://github.com/webertom6/medical-imaging",
            techs_list: [
                "For each volume, compute max z-score of slice-to-slice differences.",
                "Compute slice-wise temporal z-score consistency for each volume.",
                "Get an adaptative threshold for artifact detection based on clean volumes.",
                "Statistical analysis of detected artifacts.",
                "Technology Used : MRIcron, Python."
            ],
            image: {
                url: "https://github.com/webertom6/medical-imaging/blob/main/image/164.png?raw=true",
                alt: "fMRI Artifacts Detection"
            }
        },
        fpgaRaycast: {
            title: "Doom-like Raycasting FPGA",
            description: "FPGA implementation of retro-like FPV (First Person View) game with 2D dynamics but with a 3D rendering using ray casting engine like in the video game Wolfenstein3D.",
            link: "https://github.com/webertom6/doom-like-raycasting-fpga",
            techs_list: [
                "Real time rendering with smooth graphics.",
                "Compressed RBG images for limited ROM.",
                "Technology Used: VHDL, Quartus, DE0-Nano (Cyclone® IV FPGA)."
            ],
            image: [
                { url: "./assets/images/demo_doom.webp", alt: "Demo doom raycast fpga" },
                { url: "./assets/images/DE0-Nano_layout_top.webp", alt: "DE0-Nano Layout Top" },
                { url: "https://github.com/webertom6/doom-raycast-fpga/blob/main/report/table_compression.png?raw=true", alt: "Table Image Compression" }
            ]
        },
        databaseStoreManagement: {
            title: "WeND(Y)'s : Database for Store Management",
            description: "Website and database management for WeND(Y)'s Party Management System, a small party and event planning business.",
            link: "https://github.com/webertom6/database-store-management",
            techs_list: [
                "Management of stocks and planning using a web interface.",
                "Implementation and interaction with a relational database using PHP and SQL.",
                "Technology Used : PHP, SQL, JavaScript, HTML, CSS."
            ],
            image: {
                url: "https://github.com/webertom6/database-store-management/blob/main/demo.gif?raw=true",
                alt: "Database Store Management Demo"
            }
        },
        protobot: {
            title: "Protobot: Autonomous Obstacle-Avoiding Car",
            description: "The team (Florent Boxus, Alex Rousseau, Anes Skrijelj, Maxime Temoschenko, Tom Weber) designed and built Protobot, a mobile robot capable of navigating autonomously while avoiding obstacles and dead ends. The robot interprets sensor data to adapt its path dynamically, using a finite state machine and PI control loops to manage motor speed and direction.",
            link: "https://github.com/webertom6/pi-protobot",
            techs_list: [
                "Programming of PIC controller in Assembly language.",
                "Implementation of interrupt-driven architecture and round-robin scheduling.",
                "Design and soldering of a custom PCB.",
                "Integration of sensors (ultrasonic, photomicrosensors) and actuators (DC motors).",
                "Technology Used : Assembly, MPLabs, KiCAD."
            ],
            image: {
                url: "https://github.com/webertom6/pi-protobot/blob/main/video/demo_protobot.gif?raw=true",
                alt: "Protobot Demo"
            }
        },
        signalGenerator: {
            title: "Signal Generator",
            description: "A compact signal generator (sinus, triangle, square) with tunable frequency project implemented in C with a custom PCB.",
            link: "https://github.com/webertom6/applied-elec",
            techs_list: [
                "Design and soldering of a custom PCB.",
                "Programming of micro controller.",
                "Technology Used : KiCad, Micro Soldering, STM32CubeIDE, SPI communication."
            ],
            image: [
                { url: "https://github.com/webertom6/applied-elec/blob/main/demo/pcb_3D.png?raw=true", alt: "PCB layout 3D" },
                { url: "https://github.com/webertom6/applied-elec/blob/main/demo/demo.gif?raw=true", alt: "Signal Generator Demo" }
            ]
        },
        gamegridapp: {
            title: "GameGridApp - Modulatory GUI template for board games",
            description: "Modulatory GUI template for board games playing with tiles. The goal was to design a game GUI which can be adapted by just switching the assets and how the TILES interact with each other and let the \"engine\" do the rest. Utopic goal from a 2nd year engineer student but was fun to build and apply course material OOP, concurrency, UI and AI",
            link: "https://github.com/webertom6/GameGridApp",
            techs_list: [
                "Compliance of object-oriented programming principles for modularity, readability, simplicity, portability and reusability.",
                "Mob system with A* pathfinding algorithm.",
                "Multithreading for concurrent execution of game logic and user interface.",
                "Graphical user interface (GUI) with Java Swing, including a main menu, game board, and dynamic tile interactions.",
                "Resizable UI with dynamic scaling of window panels.",
                "Sound effects and tunable background music.",
                "Technology Used : "
            ],
            image: [
                {
                    url: "https://github.com/user-attachments/assets/f1bf356d-7020-45c5-ba04-eb39c7c76237",
                    alt: "Video demo of GameGridApp showing a pathfinding mob navigating a grid-based game board with dynamic tile interactions and sound effects."
                },
                {
                    url: "https://github.com/webertom6/GameGridApp/blob/main/src/be/weber/sokoban/report/diagram_gamegridapp_puml.svg?raw=true",
                    alt: "GameGridApp OOP (object oriented programming) relationships diagram"
                }
            ]
        },
        dl: {
            title: "Deep-Learning scene classification",
            description: "Scene understanding with different deep-learning architectures (ConvNet, DenseNet, ResNet, ViT).",
            link: "https://github.com/webertom6/deep-learning",
            techs_list: [
                "Evaluation of models for image classification.",
                "Improving training efficiency by focusing on broader scene categories more relevant to real-world applications like cathedral, church, abbey, ... = monument.",
                "Visualization of ViT attention maps.",
                "Technology Used : PyTorch, WandB."
            ],
            image: [
                { url: "https://github.com/webertom6/deep-learning/blob/main/report/images/IntelImage_accuracy.png?raw=true", alt: "Intel Image Accuracy" },
                { url: "https://github.com/webertom6/deep-learning/blob/main/report/images/205_error_church.png?raw=true", alt: "Error Church" },
                { url: "https://github.com/webertom6/deep-learning/blob/main/report/images/img_attn_street.png?raw=true", alt: "Attention Map Street" },
                { url: "https://github.com/webertom6/deep-learning/blob/main/report/images/map_attn_street.png?raw=true", alt: "Attention Map Street" }
            ]
        }
    };

    const pageMappings = {
        index: [
            { containerClass: "project-container-cv2", projectId: "cv2", cardType: 2 },
            { containerClass: "project-container-fpga-raycast", projectId: "fpgaRaycast", cardType: 2 }
        ],
        works: [
            { containerClass: "project-container-cv1", projectId: "cv1", cardType: 1 },
            { containerClass: "project-container-cv2", projectId: "cv2", cardType: 2 },
            { containerClass: "project-container-mlops", projectId: "mlops", cardType: 1 },
            { containerClass: "project-container-med-imaging", projectId: "medImaging", cardType: 1 },
            { containerClass: "project-container-fpga-raycast", projectId: "fpgaRaycast", cardType: 2 },
            { containerClass: "project-container-database-store-management", projectId: "databaseStoreManagement", cardType: 1 },
            { containerClass: "project-container-protobot", projectId: "protobot", cardType: 1 },
            { containerClass: "project-container-signal-generator", projectId: "signalGenerator", cardType: 2 },
            { containerClass: "project-container-gamegridapp", projectId: "gamegridapp", cardType: 2 },
            { containerClass: "project-container-dl", projectId: "dl", cardType: 2 }
        ]
    };

    const worksProjects = [
        {
            id: "fpga-raycast",
            featured: true,
            domain: "Embedded Systems",
            title: "Doom-like Raycasting FPGA",
            story: "Real-time retro-style 3D rendering on constrained FPGA hardware, built end-to-end from rendering logic to memory-efficient visual assets.",
            highlights: [
                "Implemented raycasting engine with smooth frame updates.",
                "Designed compressed RGB asset strategy for limited ROM footprint.",
                "Integrated and validated on DE0-Nano (Cyclone IV) board."
            ],
            tech: ["VHDL", "Quartus", "FPGA", "Digital Design"],
            repo: "https://github.com/webertom6/doom-like-raycasting-fpga",
            media: [
                { url: "./assets/images/demo_doom.webp", alt: "Doom-like FPGA game demo" },
                { url: "./assets/images/DE0-Nano_layout_top.webp", alt: "DE0-Nano hardware layout" },
                { url: "https://github.com/webertom6/doom-raycast-fpga/blob/main/report/table_compression.png?raw=true", alt: "Compression strategy table" }
            ]
        },
        {
            id: "chessboard-cv",
            featured: true,
            domain: "Computer Vision",
            title: "Chessboard Recognition Pipeline",
            story: "Near real-time chessboard understanding pipeline for projection, segmentation and piece classification from video frames.",
            highlights: [
                "Trained and integrated custom YOLO model for piece localization.",
                "Combined classical CV (Hough and morphology) with learned detection.",
                "Delivered robust board warping and piece-state extraction workflow."
            ],
            tech: ["Python", "OpenCV", "YOLOv11", "Image Processing"],
            repo: "https://github.com/webertom6/computer-vison-chessboard",
            media: [
                { url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/stickers_color_overlay.png?raw=true", alt: "Overlay on chessboard pieces" },
                { url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/warped_seg.png?raw=true", alt: "Warped segmentation output" },
                { url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/chessboard_cleaning_examples.png?raw=true", alt: "Post-processing examples" }
            ]
        },
        {
            id: "wattwise-mlops",
            featured: true,
            domain: "MLOps & Cloud",
            title: "Wattwise Energy Forecasting Platform",
            story: "A full-stack MLOps workflow to forecast European energy and weather variables with repeatable training, monitoring and deployment.",
            highlights: [
                "Built automated ingestion for environmental and energy datasets.",
                "Orchestrated training and prediction pipelines on Google Cloud.",
                "Applied GitFlow and CI/CD for quality and release consistency."
            ],
            tech: ["Vertex AI", "Google Cloud", "API Integration", "CI/CD", "Machine Learning"],
            repo: "https://github.com/webertom6/wattwise-mlops",
            media: [
                { url: "https://github.com/webertom6/wattwise-mlops/blob/main/img/vertex_ai_pipeline.png?raw=true", alt: "Vertex AI pipeline overview" }
            ]
        },
        {
            id: "protobot",
            featured: false,
            domain: "Robotics",
            title: "Protobot Autonomous Obstacle-Avoiding Car",
            story: "Collaborative robotics project delivering an autonomous mobile platform capable of obstacle avoidance and dead-end recovery.",
            highlights: [
                "Implemented finite-state navigation and PI motor control loops.",
                "Programmed interrupt-driven firmware with round-robin scheduling.",
                "Designed and assembled custom PCB with sensor-actuator integration."
            ],
            tech: ["Assembly", "MPLAB", "KiCad", "Embedded Control", "Sensor Fusion"],
            repo: "https://github.com/webertom6/pi-protobot",
            media: [
                { url: "https://github.com/webertom6/pi-protobot/blob/main/video/demo_protobot.gif?raw=true", alt: "Protobot navigation demo" }
            ]
        },
        {
            id: "deep-learning",
            featured: false,
            domain: "Deep Learning",
            title: "Scene Classification Benchmarking",
            story: "Comparative study of ConvNet, DenseNet, ResNet and ViT architectures for practical scene understanding tasks.",
            highlights: [
                "Evaluated multi-architecture performance on scene datasets.",
                "Improved efficiency through broader category grouping strategy.",
                "Produced ViT attention-map visualizations for interpretability."
            ],
            tech: ["PyTorch", "WandB", "Vision Transformers", "Model Evaluation"],
            repo: "https://github.com/webertom6/deep-learning",
            media: [
                { url: "https://github.com/webertom6/deep-learning/blob/main/report/images/IntelImage_accuracy.png?raw=true", alt: "Model accuracy comparison graph" },
                { url: "https://github.com/webertom6/deep-learning/blob/main/report/images/map_attn_street.png?raw=true", alt: "Vision Transformer attention map" }
            ]
        },
        {
            id: "signal-generator",
            featured: false,
            domain: "Electronics",
            title: "Compact Signal Generator",
            story: "Custom embedded electronics project for generating sinusoidal, triangular and square waves with adjustable frequency.",
            highlights: [
                "Engineered and soldered dedicated PCB hardware.",
                "Programmed microcontroller firmware for waveform control.",
                "Implemented SPI communication for reliable peripheral interaction."
            ],
            tech: ["STM32CubeIDE", "KiCad", "SPI", "PCB Design"],
            repo: "https://github.com/webertom6/applied-elec",
            media: [
                { url: "https://github.com/webertom6/applied-elec/blob/main/demo/pcb_3D.png?raw=true", alt: "Signal generator PCB 3D view" },
                { url: "https://github.com/webertom6/applied-elec/blob/main/demo/demo.gif?raw=true", alt: "Signal generator output demo" }
            ]
        },
        {
            id: "gamegridapp",
            featured: false,
            domain: "Software Architecture",
            title: "GameGridApp Modular Board-Game GUI",
            story: "Reusable Java GUI framework for tile-based games with configurable assets, interaction logic and scalable user-interface behavior.",
            highlights: [
                "Applied OOP patterns for modularity and code reusability.",
                "Implemented A* pathfinding and concurrent game-loop execution.",
                "Delivered responsive Swing interface with audio support."
            ],
            tech: ["Java", "Swing", "Multithreading", "A* Pathfinding", "OOP"],
            repo: "https://github.com/webertom6/GameGridApp",
            media: [
                { url: "https://github.com/user-attachments/assets/f1bf356d-7020-45c5-ba04-eb39c7c76237", alt: "GameGridApp runtime demonstration", type: "video" },
                { url: "https://github.com/webertom6/GameGridApp/blob/main/src/be/weber/sokoban/report/diagram_gamegridapp_puml.svg?raw=true", alt: "GameGridApp architecture diagram" }
            ]
        },
        {
            id: "medical-imaging",
            featured: false,
            domain: "Medical Imaging",
            title: "fMRI Artifact Detection Tool",
            story: "Automated quality-control workflow for detecting problematic volumes in functional MRI sequences using statistical anomaly signals.",
            highlights: [
                "Computed slice-wise and temporal z-score consistency metrics.",
                "Derived adaptive thresholds from clean baseline volumes.",
                "Produced artifact summaries for streamlined quality reporting."
            ],
            tech: ["Python", "MRIcron", "Statistical Analysis", "Signal Processing"],
            repo: "https://github.com/webertom6/medical-imaging",
            media: [
                { url: "https://github.com/webertom6/medical-imaging/blob/main/image/164.png?raw=true", alt: "fMRI artifact detection output" }
            ]
        },
        {
            id: "database-store-management",
            featured: false,
            domain: "Web & Data",
            title: "Database Store Management System",
            story: "Web platform and relational database workflow supporting stock planning and event operations for a small business use case.",
            highlights: [
                "Built operational web interface for inventory workflows.",
                "Implemented relational database design with PHP-SQL integration.",
                "Enabled day-to-day planning actions through simple dashboards."
            ],
            tech: ["PHP", "SQL", "JavaScript", "HTML", "CSS"],
            repo: "https://github.com/webertom6/database-store-management",
            media: [
                { url: "https://github.com/webertom6/database-store-management/blob/main/demo.gif?raw=true", alt: "Store management platform demo" }
            ]
        }
    ];

    function getPageProjectMap(pageName) {
        const entries = pageMappings[pageName] || [];
        const map = new Map();
        entries.forEach((entry) => {
            const projectData = projects[entry.projectId];
            if (projectData) {
                map.set(entry.containerClass, [projectData, entry.cardType]);
            }
        });
        return map;
    }

    window.PortfolioProjectsData = {
        projects: projects,
        pageMappings: pageMappings,
        worksProjects: worksProjects,
        getPageProjectMap: getPageProjectMap
    };
})();
