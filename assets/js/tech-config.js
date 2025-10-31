// Technology showcase configuration
// Using CDN links for logos
const techConfig = [
	{
		name: 'Power BI',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
		url: 'https://powerbi.microsoft.com/',
		category: 'bi',
		description: 'Enterprise BI platform for interactive dashboards, DAX calculations, and data storytelling at scale.'
	},
	{
		name: 'Azure',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
		url: 'https://azure.microsoft.com/',
		category: 'cloud',
		description: 'Cloud computing platform for deploying data pipelines, ML models, and scalable infrastructure.'
	},
	{
		name: 'Tableau',
		icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
		url: 'https://www.tableau.com/',
		category: 'bi',
		description: 'Visual analytics platform for creating interactive data visualizations and storytelling dashboards.'
	},
	{
		name: 'Microsoft Fabric',
		icon: 'https://swimburger.net/media/ppnn3pcl/azure.png',
		url: 'https://www.microsoft.com/microsoft-fabric',
		category: 'cloud',
		description: 'Unified analytics platform combining data engineering, data science, and business intelligence.'
	},
	{
		name: 'Docker',
		icon: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
		url: 'https://www.docker.com/',
		category: 'devops',
		description: 'Containerization platform for deploying N8N servers, automation workflows, and isolated environments.'
	},
	{
		name: 'Python',
		icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
		url: 'https://www.python.org/',
		category: 'programming',
		description: 'Versatile programming language for data analysis, automation scripts, and ML model development.'
	},
	{
		name: 'SQL',
		icon: 'https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg',
		url: 'https://www.microsoft.com/sql-server',
		category: 'database',
		description: 'Database language for querying data warehouses, building ETL pipelines, and data transformation.'
	},
	{
		name: 'PowerShell',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png',
		url: 'https://learn.microsoft.com/powershell/',
		category: 'automation',
		description: 'Task automation framework for server management, deployment scripts, and Windows administration.'
	},
	{
		name: 'N8N',
		icon: 'https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png',
		url: 'https://n8n.io/',
		category: 'automation',
		description: 'Workflow automation tool for building multi-agent systems with AI orchestration and webhooks.'
	},
	{
		name: 'Home Assistant',
		icon: 'https://upload.wikimedia.org/wikipedia/en/4/49/Home_Assistant_logo_%282023%29.svg',
		url: 'https://www.home-assistant.io/',
		category: 'automation',
		description: 'Open-source smart home platform for IoT device integration and automation workflows.'
	},
	{
		name: 'Power Automate',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/1200px-Microsoft_Power_Automate.svg.png',
		url: 'https://powerautomate.microsoft.com/',
		category: 'automation',
		description: 'Cloud automation service for creating workflows between apps and intelligent business processes.'
	},
	{
		name: 'Power Apps',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Powerapps-logo.svg/2048px-Powerapps-logo.svg.png',
		url: 'https://powerapps.microsoft.com/',
		category: 'lowcode',
		description: 'Low-code platform for building custom business apps with drag-and-drop interface and data connectors.'
	},
	{
		name: 'Excel',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg',
		url: 'https://www.microsoft.com/microsoft-365/excel',
		category: 'productivity',
		description: 'Spreadsheet application for data analysis, financial modeling, and quick prototyping.'
	},
	{
		name: 'Spark',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg',
		url: 'https://spark.apache.org/',
		category: 'data',
		description: 'Distributed computing framework for processing 30M+ row datasets and big data analytics.'
	},
	{
		name: 'Git',
		icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
		url: 'https://git-scm.com/',
		category: 'devops',
		description: 'Version control system for tracking code changes, collaboration, and deployment workflows.'
	},
	{
		name: 'Lucidchart',
		icon: 'https://store-images.s-microsoft.com/image/apps.7736.f1e439b9-777e-47dd-b695-f05d19eb7b38.8ee3e6f6-c400-4919-811d-59b0cd18fa41.e5bd6ef7-31e5-4ca5-a5c6-79be979af666.png',
		url: 'https://www.lucidchart.com/',
		category: 'productivity',
		description: 'Diagramming tool for creating BI governance frameworks, data flow visualizations, and architecture diagrams.'
	},
	{
		name: 'XGBoost',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png',
		url: 'https://xgboost.ai/',
		category: 'ml',
		description: 'Machine learning library used in Nomos AI for predictive collections and debt recovery modeling.'
	},
	{
		name: 'MicroPython',
		icon: 'https://raw.githubusercontent.com/micropython/micropython/master/logo/upython-with-micro.jpg',
		url: 'https://micropython.org/',
		category: 'programming',
		description: 'Python for microcontrollers, used to build custom sunrise alarm clock with Raspberry Pi Pico W.'
	},
	{
		name: 'JavaScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		category: 'programming',
		description: 'Web programming language for interactive dashboards, N8N workflows, and automation logic.'
	},
	{
		name: 'Alteryx',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Alteryx_logo.svg',
		url: 'https://www.alteryx.com/',
		category: 'data',
		description: 'Data preparation and analytics platform for ETL workflows and self-service data blending.'
	},
	{
		name: 'Process Mining',
		icon: 'https://store-images.s-microsoft.com/image/apps.44524.de0892a8-d864-4a39-ba3a-19769b6c0e19.df759c85-fea0-42a8-9f54-8d3ec0106a7a.d268eefb-ca43-4ba6-913d-e904c7eafb6d',
		url: 'https://powerautomate.microsoft.com/process-mining/',
		category: 'analytics',
		description: 'Analytics technique for discovering, monitoring, and improving business processes from event logs.'
	},
	{
		name: 'OneLake',
		icon: 'https://debruyn.dev/2023/all-microsoft-fabric-icons-for-diagramming-old-version/onelake_48_color.svg',
		url: 'https://learn.microsoft.com/en-us/fabric/onelake/',
		category: 'cloud',
		description: 'Unified data lake in Microsoft Fabric for centralized data storage and lakehouse architecture.'
	},
	{
		name: 'Cursor',
		icon: 'https://www.cursor.com/brand/icon.svg',
		url: 'https://www.cursor.com/',
		category: 'development',
		description: 'AI-powered code editor with intelligent autocompletion and context-aware suggestions.'
	},
	{
		name: 'Claude',
		icon: 'https://cdn.worldvectorlogo.com/logos/claude-logo.svg',
		url: 'https://claude.ai/',
		category: 'ai',
		description: 'Advanced AI assistant for code generation, data analysis, and intelligent automation workflows.'
	},
	{
		name: 'Saviynt',
		icon: 'https://awsmp-logos.s3.amazonaws.com/85b79092-68e7-467e-9b84-0c33251226d9/df84b5322ceec225063950eb85da85e1.png',
		url: 'https://www.saviynt.com/',
		category: 'security',
		description: 'Identity governance platform for managing user access, security policies, and compliance.'
	},
	{
		name: 'Whiteboard',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/1024px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png',
		url: 'https://www.microsoft.com/microsoft-365/microsoft-whiteboard/',
		category: 'collaboration',
		description: 'Digital canvas for brainstorming, collaborative workshops, and visual planning sessions.'
	},
	{
		name: 'DAX',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
		url: 'https://learn.microsoft.com/en-us/dax/',
		category: 'bi',
		description: 'Formula language for Power BI calculations, complex measures, and data modeling.'
	},
	{
		name: 'M Language',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
		url: 'https://learn.microsoft.com/en-us/powerquery-m/',
		category: 'bi',
		description: 'Power Query language for data transformation, cleaning, and ETL operations.'
	},
	{
		name: 'Figma',
		icon: 'https://cdn.worldvectorlogo.com/logos/figma-5.svg',
		url: 'https://www.figma.com/',
		category: 'design',
		description: 'Collaborative design tool for UI/UX mockups, prototyping, and design system documentation.'
	}
];
