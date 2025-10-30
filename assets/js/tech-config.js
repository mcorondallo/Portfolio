// Technology showcase configuration
// Using CDN links for logos
const techConfig = [
	{
		name: 'Power BI',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
		url: 'https://powerbi.microsoft.com/',
		category: 'bi'
	},
	{
		name: 'Azure',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
		url: 'https://azure.microsoft.com/',
		category: 'cloud'
	},
	{
		name: 'Tableau',
		icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
		url: 'https://www.tableau.com/',
		category: 'bi'
	},
	{
		name: 'Microsoft Fabric',
		icon: 'https://static.wikia.nocookie.net/logopedia/images/a/aa/Microsoft_Fabric_2023.svg',
		url: 'https://www.microsoft.com/microsoft-fabric',
		category: 'cloud'
	},
	{
		name: 'Docker',
		icon: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
		url: 'https://www.docker.com/',
		category: 'devops'
	},
	{
		name: 'Python',
		icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
		url: 'https://www.python.org/',
		category: 'programming'
	},
	{
		name: 'SQL',
		icon: 'https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg',
		url: 'https://www.microsoft.com/sql-server',
		category: 'database'
	},
	{
		name: 'PowerShell',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png',
		url: 'https://learn.microsoft.com/powershell/',
		category: 'automation'
	},
	{
		name: 'N8N',
		icon: 'https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png',
		url: 'https://n8n.io/',
		category: 'automation'
	},
	{
		name: 'Home Assistant',
		icon: 'https://upload.wikimedia.org/wikipedia/en/4/49/Home_Assistant_logo_%282023%29.svg',
		url: 'https://www.home-assistant.io/',
		category: 'automation'
	},
	{
		name: 'Power Automate',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Microsoft_Power_Automate.svg/1200px-Microsoft_Power_Automate.svg.png',
		url: 'https://powerautomate.microsoft.com/',
		category: 'automation'
	},
	{
		name: 'Power Apps',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Powerapps-logo.svg/2048px-Powerapps-logo.svg.png',
		url: 'https://powerapps.microsoft.com/',
		category: 'lowcode'
	},
	{
		name: 'Excel',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg',
		url: 'https://www.microsoft.com/microsoft-365/excel',
		category: 'productivity'
	},
	{
		name: 'Spark',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg',
		url: 'https://spark.apache.org/',
		category: 'data'
	},
	{
		name: 'Git',
		icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
		url: 'https://git-scm.com/',
		category: 'devops'
	},
	{
		name: 'Lucidchart',
		icon: 'https://store-images.s-microsoft.com/image/apps.7736.f1e439b9-777e-47dd-b695-f05d19eb7b38.8ee3e6f6-c400-4919-811d-59b0cd18fa41.e5bd6ef7-31e5-4ca5-a5c6-79be979af666.png',
		url: 'https://www.lucidchart.com/',
		category: 'productivity'
	},
	{
		name: 'XGBoost',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png',
		url: 'https://xgboost.ai/',
		category: 'ml'
	},
	{
		name: 'MicroPython',
		icon: 'https://raw.githubusercontent.com/micropython/micropython/master/logo/upython-with-micro.jpg',
		url: 'https://micropython.org/',
		category: 'programming'
	},
	{
		name: 'JavaScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		category: 'programming'
	},
	{
		name: 'Alteryx',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Alteryx_logo.svg',
		url: 'https://www.alteryx.com/',
		category: 'data'
	},
	{
		name: 'Process Mining',
		icon: 'https://store-images.s-microsoft.com/image/apps.44524.de0892a8-d864-4a39-ba3a-19769b6c0e19.df759c85-fea0-42a8-9f54-8d3ec0106a7a.d268eefb-ca43-4ba6-913d-e904c7eafb6d',
		url: 'https://powerautomate.microsoft.com/process-mining/',
		category: 'analytics'
	},
	{
		name: 'OneLake',
		icon: 'https://gerhardbrueckl.gallerycdn.vsassets.io/extensions/gerhardbrueckl/onelake-vscode/0.2.1/1756467629005/Microsoft.VisualStudio.Services.Icons.Default',
		url: 'https://learn.microsoft.com/en-us/fabric/onelake/',
		category: 'cloud'
	},
	{
		name: 'DAX',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
		url: 'https://learn.microsoft.com/en-us/dax/',
		category: 'language'
	},
	{
		name: 'M Language',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
		url: 'https://learn.microsoft.com/en-us/powerquery-m/',
		category: 'language'
	},
	{
		name: 'Cursor',
		icon: 'https://www.cursor.com/brand/icon.svg',
		url: 'https://www.cursor.com/',
		category: 'development'
	},
	{
		name: 'Claude',
		icon: 'https://claude.ai/images/claude_app_icon.png',
		url: 'https://claude.ai/',
		category: 'ai'
	},
	{
		name: 'Saviynt',
		icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQVLQ8mW7HqH2VW5Q5JYw5P_hXGZE6z8_Aw&s',
		url: 'https://www.saviynt.com/',
		category: 'security'
	},
	{
		name: 'Whiteboard',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/1024px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png',
		url: 'https://www.microsoft.com/microsoft-365/microsoft-whiteboard/',
		category: 'collaboration'
	}
];
