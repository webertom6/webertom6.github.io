const PROJECTS = {
    chessboard_single: {
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
    chessboard_gallery: {
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
            {
                url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/stickers_color_overlay.png?raw=true",
                alt: "Chessboard Computer Vision"
            },
            {
                url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/stickers_hsv_overlay.png?raw=true",
                alt: "Chessboard Computer Vision"
            },
            {
                url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/yolo_hull_cluster.png?raw=true",
                alt: "Chessboard Computer Vision"
            },
            {
                url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/warped_seg.png?raw=true",
                alt: "Chessboard Computer Vision"
            },
            {
                url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/exclude_white_black_frame.png?raw=true",
                alt: "Chessboard Computer Vision"
            },
            {
                url: "https://github.com/webertom6/computer-vison-chessboard/blob/main/img_demo/chessboard_cleaning_examples.png?raw=true",
                alt: "Chessboard Computer Vision"
            }
        ]
    },
    mlops: {
        title: "Wattwise : MLOps on forecasting renewable energy",
        description: "A full-stack MLOps solution to forecast energy consumption and weather-related variables across European countries using machine learning.",
        link: "https://github.com/webertom6/wattwise-mlops",
        techs_list: [
            "Retrieve and update environmental dataset using API",
            "ML pipeline ingests energy and meteorological data for training, monitoring and predictions",
            "CI/CD to quality and functionality of project",
            "Technology Used : VertexAI, API, Google Cloud"
        ],
        image: {
            url: "https://github.com/webertom6/wattwise-mlops/blob/main/img/vertex_ai_pipeline.png?raw=true",
            alt: "Vertex AI Pipeline"
        }
    },
    med_imaging: {
        title: "fMRI artifacts detection",
        description: "Automatic tool detect problematic volumes in a series of images from functional MRI sequences",
        link: "https://github.com/webertom6/medical-imaging",
        techs_list: [
            "For each volume, compute max z-score of slice-to-slice differences",
            "Compute slice-wise temporal z-score consistency for each volume",
            "Get an adaptative threshold for artifact detection based on clean volumes",
            "Statistical analysis of detected artifacts",
            "Technology Used : MRIcron, Python"
        ],
        image: {
            url: "https://github.com/webertom6/medical-imaging/blob/main/image/164.png?raw=true",
            alt: "fMRI Artifacts Detection"
        }
    },
    fpga_raycast: {
        title: "Doom-like Raycasting FPGA",
        description: "FPGA implementation of retro-like FPV game with 2D dynamics and 3D rendering using a ray casting engine.",
        link: "https://github.com/webertom6/doom-like-raycasting-fpga",
        techs_list: [
            "Real time rendering with smooth graphics",
            "Compressed RGB images for limited ROM",
            "Technology Used: VHDL, Quartus, DE0-Nano (Cyclone IV FPGA)"
        ],
        image: [
            {
                url: "./assets/images/demo_doom.webp",
                alt: "Demo doom raycast fpga"
            },
            {
                url: "./assets/images/DE0-Nano_layout_top.webp",
                alt: "DE0-Nano Layout Top"
            },
            {
                url: "https://github.com/webertom6/doom-raycast-fpga/blob/main/report/table_compression.png?raw=true",
                alt: "Table Image Compression"
            }
        ]
    },
    database_store_management: {
        title: "WeND(Y)'s : Database for Store Management",
        description: "Website and database management for WeND(Y)'s Party Management System, a small party and event planning business.",
        link: "https://github.com/webertom6/database-store-management",
        techs_list: [
            "Management of stocks and planning using a web interface",
            "Implementation and interaction with a relational database using PHP and SQL",
            "Technology Used : PHP, SQL, JavaScript, HTML, CSS"
        ],
        image: {
            url: "https://github.com/webertom6/database-store-management/blob/main/demo.gif?raw=true",
            alt: "Database Store Management Demo"
        }
    },
    protobot: {
        title: "Protobot: Autonomous Obstacle-Avoiding Car",
        description: "Mobile robot capable of navigating autonomously while avoiding obstacles and dead ends.",
        link: "https://github.com/webertom6/pi-protobot",
        techs_list: [
            "Programming of PIC controller in Assembly language",
            "Implementation of interrupt-driven architecture and round-robin scheduling",
            "Design and soldering of a custom PCB",
            "Integration of sensors and actuators",
            "Technology Used : Assembly, MPLabs, KiCAD"
        ],
        image: {
            url: "https://github.com/webertom6/pi-protobot/blob/main/video/demo_protobot.gif?raw=true",
            alt: "Protobot Demo"
        }
    },
    signal_generator: {
        title: "Signal Generator",
        description: "A compact signal generator with tunable frequency implemented in C with a custom PCB.",
        link: "https://github.com/webertom6/applied-elec",
        techs_list: [
            "Design and soldering of a custom PCB",
            "Programming of micro controller",
            "Technology Used : KiCad, Micro Soldering, STM32CubeIDE, SPI communication"
        ],
        image: [
            {
                url: "https://github.com/webertom6/applied-elec/blob/main/demo/pcb_3D.png?raw=true",
                alt: "PCB layout 3D"
            },
            {
                url: "https://github.com/webertom6/applied-elec/blob/main/demo/demo.gif?raw=true",
                alt: "Signal Generator Demo"
            }
        ]
    },
    gamegrid_app: {
        title: "GameGridApp - Modulatory GUI template for board games",
        description: "Modulatory GUI template for board games with reusable assets and interaction rules.",
        link: "https://github.com/webertom6/GameGridApp",
        techs_list: [
            "Compliance of object-oriented programming principles",
            "Mob system with A* pathfinding algorithm",
            "Multithreading for concurrent execution of game logic and user interface",
            "Graphical user interface with Java Swing",
            "Resizable UI with dynamic scaling of window panels"
        ],
        image: [
            {
                url: "https://github.com/user-attachments/assets/f1bf356d-7020-45c5-ba04-eb39c7c76237",
                alt: "Video demo of GameGridApp"
            },
            {
                url: "https://github.com/webertom6/GameGridApp/blob/main/src/be/weber/sokoban/report/diagram_gamegridapp_puml.svg?raw=true",
                alt: "GameGridApp relationships diagram"
            }
        ]
    },
    deep_learning: {
        title: "Deep-Learning scene classification",
        description: "Scene understanding with different deep-learning architectures (ConvNet, DenseNet, ResNet, ViT).",
        link: "https://github.com/webertom6/deep-learning",
        techs_list: [
            "Evaluation of models for image classification",
            "Improving training efficiency with broader scene categories",
            "Visualization of ViT attention maps",
            "Technology Used : PyTorch, WandB"
        ],
        image: [
            {
                url: "https://github.com/webertom6/deep-learning/blob/main/report/images/IntelImage_accuracy.png?raw=true",
                alt: "Intel Image Accuracy"
            },
            {
                url: "https://github.com/webertom6/deep-learning/blob/main/report/images/205_error_church.png?raw=true",
                alt: "Error Church"
            },
            {
                url: "https://github.com/webertom6/deep-learning/blob/main/report/images/img_attn_street.png?raw=true",
                alt: "Attention Map Street"
            },
            {
                url: "https://github.com/webertom6/deep-learning/blob/main/report/images/map_attn_street.png?raw=true",
                alt: "Attention Map Street"
            }
        ]
    }
};

const HOME_PROJECT_MAP = {
    "project-container-cv2": { key: "chessboard_gallery", card_type: 2 },
    "project-container-fpga-raycast": { key: "fpga_raycast", card_type: 2 }
};

const WORKS_PROJECT_MAP = {
    "project-container-cv1": { key: "chessboard_single", card_type: 1 },
    "project-container-cv2": { key: "chessboard_gallery", card_type: 2 },
    "project-container-mlops": { key: "mlops", card_type: 1 },
    "project-container-med-imaging": { key: "med_imaging", card_type: 1 },
    "project-container-fpga-raycast": { key: "fpga_raycast", card_type: 2 },
    "project-container-database-store-management": { key: "database_store_management", card_type: 1 },
    "project-container-protobot": { key: "protobot", card_type: 1 },
    "project-container-signal-generator": { key: "signal_generator", card_type: 2 },
    "project-container-gamegridapp": { key: "gamegrid_app", card_type: 2 },
    "project-container-dl": { key: "deep_learning", card_type: 2 }
};
