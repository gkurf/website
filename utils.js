// Date formatting utilities
const DateUtils = {
    formatDate: (dateStr) => {
        const [year, month, day] = dateStr.split('-').map(Number);
        const date = new Date(year, month - 1, day); // month is 0-indexed in Date constructor

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    },

    formatDateRange: (startDate, endDate) => {
        if (!startDate) return '';
        
        const formattedStart = DateUtils.formatDate(startDate);
        
        if (!endDate || startDate === endDate) {
            return formattedStart;
        }

        const formattedEnd = DateUtils.formatDate(endDate);
        
        if (formattedStart === formattedEnd) {
            return formattedStart;
        }
        
        return `${formattedStart} — ${formattedEnd}`;
    }
};

// URL parameter utilities
const URLUtils = {
    getParam: (name, defaultValue = null) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name) || defaultValue;
    },

    setParam: (name, value) => {
        const url = new URL(window.location);
        if (value === null) {
            url.searchParams.delete(name);
        } else {
            url.searchParams.set(name, value);
        }
        window.history.pushState({}, '', url);
    }
};