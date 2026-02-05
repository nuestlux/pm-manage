
// Mock localStorage
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => store[key] = value.toString(),
        clear: () => store = {}
    };
})();

global.localStorage = localStorageMock;

// Mock dependencies
const t = (key) => key;
const UI = {
    showToast: (msg) => console.log(`[Toast]: ${msg}`)
};

// --- Copy of DEFAULT_DATA and DataStore from app.html ---

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
            name: 'PM Manage',
            description: 'Default Project',
            members: [
                { userId: 1, role: 'pm', joinedDate: '2026-01-01' },
                { userId: 2, role: 'ba', joinedDate: '2026-01-01' },
                { userId: 3, role: 'dev', joinedDate: '2026-01-01' },
                { userId: 4, role: 'tester', joinedDate: '2026-01-01' },
                { userId: 5, role: 'dev', joinedDate: '2026-01-01' },
                { userId: 6, role: 'am', joinedDate: '2026-01-01' }
            ],
            createdDate: '2026-01-01'
        }
    ],
    userStories: [
        { id: 1, projectId: 1, title: 'Story 1' },
        { id: 2, projectId: 1, title: 'Story 2' }
    ],
    tasks: [
        { id: 101, projectId: 1, title: 'Task 1' }
    ],
    versions: [],
    activities: [],
    projectStats: {},
    settings: {
        appName: 'PM Manage',
        dateFormat: 'DD/MM/YYYY',
        emailNotifications: true,
        autoBackup: false
    }
};

class DataStore {
    constructor() {
        this.STORAGE_KEY = 'pm_manage_db_v1';
        this.data = this.load();
    }

    load() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            let data = stored ? JSON.parse(stored) : null;

            if (!data || !Array.isArray(data.userStories) || !Array.isArray(data.tasks)) {
                // console.warn("Storage empty or corrupted, reloading defaults.");
                data = JSON.parse(JSON.stringify(DEFAULT_DATA));
            }

            if (!data.settings) {
                data.settings = JSON.parse(JSON.stringify(DEFAULT_DATA.settings));
            }

            // Migration: Multi-Project
            if (!data.projects) {
                console.log("Migrating to Multi-Project...");
                const defaultProject = {
                    id: 1,
                    name: 'Default Project',
                    description: 'Migrated Legacy Project',
                    members: data.users ? data.users.map(u => ({ userId: u.id, role: u.role, joinedDate: new Date().toISOString().split('T')[0] })) : [],
                    createdDate: new Date().toISOString().split('T')[0]
                };
                data.projects = [defaultProject];

                // Assign existing items to default project
                data.userStories.forEach(s => s.projectId = 1);
                data.tasks.forEach(t => t.projectId = 1);
            }

            return data;
        } catch (e) {
            console.error("Failed to load data, using defaults", e);
            return JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
    }

    save() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    }
}

// --- Tests ---

function testDefaultLoad() {
    console.log("Test 1: Default Load (Empty Storage)");
    localStorage.clear();
    const store = new DataStore();

    if (store.data.projects.length === 1 && store.data.projects[0].name === 'PM Manage') {
        console.log("PASS: Default project loaded.");
    } else {
        console.error("FAIL: Default project not loaded correctly.", store.data.projects);
    }

    if (store.data.userStories[0].projectId === 1) {
        console.log("PASS: Story project ID correct.");
    } else {
        console.error("FAIL: Story project ID missing.", store.data.userStories[0]);
    }
}

function testMigration() {
    console.log("\nTest 2: Migration (Legacy Data)");
    localStorage.clear();

    // Setup legacy data (no projects, no projectIds)
    const legacyData = {
        users: DEFAULT_DATA.users,
        userStories: [{ id: 99, title: 'Old Story' }],
        tasks: [{ id: 901, title: 'Old Task' }],
        settings: DEFAULT_DATA.settings
    };
    localStorage.setItem('pm_manage_db_v1', JSON.stringify(legacyData));

    const store = new DataStore();

    if (store.data.projects && store.data.projects.length === 1) {
        console.log("PASS: Projects array created.");
        if (store.data.projects[0].name === 'Default Project') {
            console.log("PASS: Legacy Project name correct.");
        } else {
            console.error("FAIL: Legacy Project name wrong/missing.");
        }
    } else {
        console.error("FAIL: Projects array missing after migration.");
    }

    if (store.data.userStories[0].projectId === 1) {
        console.log("PASS: Legacy Story assigned to Project 1.");
    } else {
        console.error("FAIL: Legacy Story not assigned.", store.data.userStories[0]);
    }
}

testDefaultLoad();
testMigration();
