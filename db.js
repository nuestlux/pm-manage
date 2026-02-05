/**
 * PM Manage - Central Database (Static Mock)
 * Ổn định và đồng bộ hóa với UI
 */

// Mock LDAP Users (Simulating Active Directory)
const MOCK_LDAP_USERS = [
    { username: "minhduc", password: "admin123", name: "Nguyễn Minh Đức", email: "minhduc@company.com", department: "IT", role: "pm", avatar: "MD" },
    { username: "thuha", password: "ba123", name: "Trần Thu Hà", email: "thuha@company.com", department: "Business", role: "ba", avatar: "TH" },
    { username: "vanan", password: "dev123", name: "Lê Văn An", email: "vanan@company.com", department: "Engineering", role: "dev", avatar: "VA" },
    { username: "thunga", password: "test123", name: "Phạm Thu Nga", email: "thunga@company.com", department: "QA", role: "tester", avatar: "TN" },
    { username: "quockhai", password: "dev123", name: "Hoàng Quốc Khải", email: "quockhai@company.com", department: "Engineering", role: "dev", avatar: "QK" },
    { username: "sarah", password: "am123", name: "Sarah Johnson", email: "sarah@company.com", department: "Management", role: "am", avatar: "SJ" },
    { username: "admin", password: "admin", name: "System Admin", email: "admin@company.com", department: "IT", role: "pm", avatar: "AD" },
    { username: "john.doe", password: "demo123", name: "John Doe", email: "john.doe@company.com", department: "Engineering", role: "dev", avatar: "JD" },
    { username: "jane.smith", password: "demo123", name: "Jane Smith", email: "jane.smith@company.com", department: "QA", role: "tester", avatar: "JS" },
    { username: "mike.wilson", password: "demo123", name: "Mike Wilson", email: "mike.wilson@company.com", department: "Business", role: "ba", avatar: "MW" },
    { username: "lisa.chen", password: "demo123", name: "Lisa Chen", email: "lisa.chen@company.com", department: "Engineering", role: "dev", avatar: "LC" },
    { username: "david.park", password: "demo123", name: "David Park", email: "david.park@company.com", department: "Management", role: "pm", avatar: "DP" }
];


const DEFAULT_DATA = {
    currentUser: { id: 1, name: 'Nguyễn Minh Đức', email: 'minhduc@pmmanage.com', role: 'pm', avatar: 'MD' },
    users: [
        { id: 1, name: 'Nguyễn Minh Đức', role: 'pm', avatar: 'MD', workload: 90, activeTasks: 8 },
        { id: 2, name: 'Trần Thu Hà', role: 'ba', avatar: 'TH', workload: 60, activeTasks: 5 },
        { id: 3, name: 'Lê Văn An', role: 'dev', avatar: 'VA', workload: 110, activeTasks: 12 },
        { id: 4, name: 'Phạm Thu Nga', role: 'tester', avatar: 'TN', workload: 75, activeTasks: 7 },
        { id: 5, name: 'Hoàng Quốc Khải', role: 'dev', avatar: 'QK', workload: 65, activeTasks: 6 },
        { id: 6, name: 'Sarah Johnson', role: 'am', avatar: 'SJ', workload: 30, activeTasks: 3 }
    ],
    projects: [
        {
            id: 1,
            name: 'PM Manage System',
            description: 'Hệ thống quản lý dự án nội bộ cho doanh nghiệp IT.',
            members: [
                { userId: 1, role: 'pm', joinedDate: '2026-01-01' },
                { userId: 2, role: 'ba', joinedDate: '2026-01-01' },
                { userId: 3, role: 'dev', joinedDate: '2026-01-01' },
                { userId: 4, role: 'tester', joinedDate: '2026-01-01' },
                { userId: 5, role: 'dev', joinedDate: '2026-01-01' },
                { userId: 6, role: 'am', joinedDate: '2026-01-01' }
            ],
            createdDate: '2026-01-01'
        },
        {
            id: 2,
            name: 'Mobile App V2',
            description: 'Nâng cấp ứng dụng di động cho khách hàng đối tác.',
            members: [
                { userId: 1, role: 'pm', joinedDate: '2026-02-01' },
                { userId: 5, role: 'dev', joinedDate: '2026-02-01' }
            ],
            createdDate: '2026-02-01'
        }
    ],
    userStories: [
        {
            id: 1, projectId: 1, title: 'Đăng nhập bằng email', titleEn: 'Login with email',
            status: 'done', priority: 'high', assigneeId: 3, version: 'v1.0',
            taskCount: 4, tasksDone: 4, createdDate: '2026-01-15',
            storyPoints: 5, rank: 1, epic: 'Authentication', acceptanceCriteria: '- User can input email and password\n- Success redirect to dashboard\n- Error handling for invalid credentials'
        },
        {
            id: 2, projectId: 1, title: 'Dashboard thống kê', titleEn: 'Dashboard stats',
            status: 'inProgress', priority: 'high', assigneeId: 3, version: 'v1.0',
            taskCount: 6, tasksDone: 3, createdDate: '2026-01-20',
            storyPoints: 8, rank: 2, epic: 'Reporting', acceptanceCriteria: '- Real-time charts for progress\n- Summary metric cards\n- Filter stats by project'
        },
        {
            id: 3, projectId: 1, title: 'Quản lý User Stories', titleEn: 'Manage User Stories',
            status: 'inProgress', priority: 'critical', assigneeId: 3, version: 'v1.0',
            taskCount: 8, tasksDone: 4, createdDate: '2026-01-22',
            storyPoints: 13, rank: 3, epic: 'Core Features', acceptanceCriteria: '- List, Create, Edit, Delete stories\n- Filter by status and priority'
        },
        {
            id: 4, projectId: 1, title: 'Kanban board', titleEn: 'Kanban board',
            status: 'inReview', priority: 'high', assigneeId: 5, version: 'v1.0',
            taskCount: 5, tasksDone: 5, createdDate: '2026-01-25',
            storyPoints: 8, rank: 4, epic: 'Task Management', acceptanceCriteria: '- Drag and drop tasks between columns\n- Real-time updates'
        },
        {
            id: 5, projectId: 1, title: 'Báo cáo tiến độ', titleEn: 'Progress reports',
            status: 'todo', priority: 'medium', assigneeId: null, version: 'v1.1',
            taskCount: 0, tasksDone: 0, createdDate: '2026-01-28',
            storyPoints: 3, rank: 5, epic: 'Reporting', acceptanceCriteria: '- Export PDF report\n- Weekly email summary'
        },
        {
            id: 6, projectId: 1, title: 'Tích hợp Git', titleEn: 'Git integration',
            status: 'todo', priority: 'medium', assigneeId: null, version: 'v1.1',
            taskCount: 0, tasksDone: 0, createdDate: '2026-01-30',
            storyPoints: 21, rank: 6, epic: 'Integrations', acceptanceCriteria: '- Connect Github repository\n- Sync commit messages with tasks'
        }
    ],
    tasks: [
        {
            id: 101, projectId: 1, title: 'API đăng nhập', titleEn: 'Login API',
            status: 'done', priority: 'high', assigneeId: 3, storyId: 1,
            type: 'task', dueDate: '2026-01-22', estimatedHours: 8, timeSpent: 7.5
        },
        {
            id: 102, projectId: 1, title: 'Login UI', titleEn: 'Login UI',
            status: 'done', priority: 'high', assigneeId: 5, storyId: 1,
            type: 'task', dueDate: '2026-01-24', estimatedHours: 6, timeSpent: 6
        },
        {
            id: 201, projectId: 1, title: 'Dashboard layout', titleEn: 'Dashboard layout',
            status: 'done', priority: 'high', assigneeId: 5, storyId: 2,
            type: 'task', dueDate: '2026-02-02', estimatedHours: 8, timeSpent: 9
        },
        {
            id: 202, projectId: 1, title: 'API thống kê', titleEn: 'Stats API',
            status: 'inProgress', priority: 'high', assigneeId: 3, storyId: 2,
            type: 'task', dueDate: '2026-02-05', estimatedHours: 6, timeSpent: 3
        },
        {
            id: 301, projectId: 1, title: 'CRUD User Stories', titleEn: 'CRUD User Stories',
            status: 'done', priority: 'critical', assigneeId: 3, storyId: 3,
            type: 'task', dueDate: '2026-02-05', estimatedHours: 12, timeSpent: 11
        },
        {
            id: 401, projectId: 1, title: 'Kanban Component', titleEn: 'Kanban Component',
            status: 'inReview', priority: 'high', assigneeId: 5, storyId: 4,
            type: 'task', dueDate: '2026-02-15', estimatedHours: 12, timeSpent: 13
        },
        {
            id: 501, projectId: 1, title: 'Fix: Email validation', titleEn: 'Fix: Email validation',
            status: 'inProgress', priority: 'critical', assigneeId: 5, storyId: 1,
            type: 'bug', dueDate: '2026-02-06', estimatedHours: 4, timeSpent: 2
        }
    ],
    versions: [
        { id: 1, name: 'v1.0 - MVP', progress: 75, date: '2026-02-28' },
        { id: 2, name: 'v1.1 - Enhanced', progress: 15, date: '2026-03-31' }
    ],
    milestones: [
        {
            id: 1,
            projectId: 1,
            name: 'MVP Release',
            description: 'First version with core features',
            dueDate: '2026-02-28',
            status: 'inProgress', // planned, inProgress, completed, delayed
            completionPercentage: 75,
            linkedStories: [1, 2, 3, 4],
            createdDate: '2026-01-15'
        },
        {
            id: 2,
            projectId: 1,
            name: 'Beta Testing',
            description: 'Internal testing phase',
            dueDate: '2026-03-15',
            status: 'planned',
            completionPercentage: 0,
            linkedStories: [5, 6],
            createdDate: '2026-01-20'
        }
    ],
    budgets: [
        {
            id: 1,
            projectId: 1,
            totalBudget: 100000,
            currency: 'USD',
            categories: [
                { id: 1, name: 'Development', allocated: 60000, spent: 45000 },
                { id: 2, name: 'Design', allocated: 20000, spent: 18000 },
                { id: 3, name: 'Testing', allocated: 15000, spent: 8000 },
                { id: 4, name: 'Other', allocated: 5000, spent: 2000 }
            ],
            createdDate: '2026-01-01',
            lastUpdated: '2026-02-04'
        },
        {
            id: 2,
            projectId: 2,
            totalBudget: 50000,
            currency: 'USD',
            categories: [
                { id: 1, name: 'Development', allocated: 35000, spent: 10000 },
                { id: 2, name: 'Design', allocated: 10000, spent: 5000 },
                { id: 3, name: 'Testing', allocated: 5000, spent: 0 }
            ],
            createdDate: '2026-02-01',
            lastUpdated: '2026-02-04'
        }
    ],
    risks: [
        {
            id: 1,
            projectId: 1,
            title: 'Key developer leaving',
            description: 'Senior developer may leave the team in Q2',
            probability: 'medium', // low, medium, high
            impact: 'high', // low, medium, high
            status: 'active', // active, mitigated, occurred, closed
            mitigation: 'Cross-training team members on critical modules',
            owner: 1, // userId
            createdDate: '2026-01-20',
            lastUpdated: '2026-02-01'
        },
        {
            id: 2,
            projectId: 1,
            title: 'Third-party API changes',
            description: 'External API provider may deprecate current version',
            probability: 'low',
            impact: 'medium',
            status: 'active',
            mitigation: 'Monitor API changelog and prepare migration plan',
            owner: 3,
            createdDate: '2026-01-25',
            lastUpdated: '2026-01-25'
        },
        {
            id: 3,
            projectId: 1,
            title: 'Scope creep',
            description: 'Stakeholders requesting additional features',
            probability: 'high',
            impact: 'high',
            status: 'mitigated',
            mitigation: 'Strict change control process implemented',
            owner: 1,
            createdDate: '2026-01-15',
            lastUpdated: '2026-02-03'
        }
    ],
    documents: [
        {
            id: 1,
            projectId: 1,
            name: 'Requirements Specification.pdf',
            description: 'Detailed requirements document',
            category: 'requirements', // requirements, design, technical, meeting, other
            size: 2048576, // bytes
            uploadedBy: 1,
            uploadedDate: '2026-01-10',
            lastModified: '2026-01-15',
            // In real app, this would be a URL or file path
            // For demo, we'll use a placeholder
            url: '#'
        },
        {
            id: 2,
            projectId: 1,
            name: 'UI Mockups.fig',
            description: 'Figma design files',
            category: 'design',
            size: 5242880,
            uploadedBy: 2,
            uploadedDate: '2026-01-12',
            lastModified: '2026-01-20',
            url: '#'
        },
        {
            id: 3,
            projectId: 1,
            name: 'API Documentation.md',
            description: 'Backend API specifications',
            category: 'technical',
            size: 102400,
            uploadedBy: 3,
            uploadedDate: '2026-01-18',
            lastModified: '2026-02-01',
            url: '#'
        }
    ],
    activities: [
        {
            id: 1,
            projectId: 1,
            userId: 5,
            action: 'completed_task',
            target: 'Task #401: Kanban Component',
            message: 'hoàn thành task #401',
            messageEn: 'completed task #401',
            timestamp: '2026-02-04T10:30:00'
        },
        {
            id: 2,
            projectId: 1,
            userId: 2,
            action: 'created_story',
            target: 'Story #3: Quản lý User Stories',
            message: 'tạo story mới #3',
            messageEn: 'created story #3',
            timestamp: '2026-02-04T09:15:00'
        },
        {
            id: 3,
            projectId: 1,
            userId: 4,
            action: 'reported_bug',
            target: 'Bug #501: Email validation',
            message: 'báo lỗi #501',
            messageEn: 'reported bug #501',
            timestamp: '2026-02-04T08:45:00'
        },
        {
            id: 4,
            projectId: 1,
            userId: 1,
            action: 'created_milestone',
            target: 'Milestone: MVP Release',
            message: 'tạo milestone MVP Release',
            messageEn: 'created milestone MVP Release',
            timestamp: '2026-01-15T14:00:00'
        },
        {
            id: 5,
            projectId: 1,
            userId: 1,
            action: 'updated_budget',
            target: 'Budget: Development category',
            message: 'cập nhật ngân sách Development',
            messageEn: 'updated Development budget',
            timestamp: '2026-02-04T11:00:00'
        }
    ],
    projectStats: { activeStories: 4, activeTasks: 8 },
    settings: {
        appName: 'PM Manage',
        dateFormat: 'DD/MM/YYYY',
        emailNotifications: true,
        autoBackup: false
    }
};
