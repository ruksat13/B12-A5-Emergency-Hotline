// ========== COUNTERS ==========
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
// Emergency Hotline Project - by ruksat13
// ========== HEART BUTTON ==========
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('hrt')) {
        if (e.target.disabled) return;
        heartCount++;
        document.getElementById('heart-count').textContent = heartCount;
        e.target.textContent = '❤️';
        e.target.style.color = 'red';
        e.target.disabled = true;
    }
});
// ========== CALL BUTTON ==========
function callService(name, number) {
    if (coinCount < 20) {
        alert('❌ পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন দরকার।');
        return;
    }
    alert(`📞 Calling: ${name}\nNumber: ${number}`);
    coinCount -= 20;
    document.getElementById('coin-count').textContent = coinCount;
    addToHistory(name, number);
}

// ========== ADD TO HISTORY ==========
function addToHistory(name, number) {
    const historyList = document.getElementById('history-list');
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    const item = document.createElement('div');
    item.classList.add('border-b', 'pb-2');
    item.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <p class="font-semibold text-sm">${name}</p>
                <p class="text-gray-500 text-xs">${number}</p>
            </div>
            <span class="text-xs text-gray-400">${time}</span>
        </div>
    `;
    historyList.appendChild(item);
}

// ========== CLEAR HISTORY ==========
function clearHistory() {
    document.getElementById('history-list').innerHTML = '';
}

// ========== COPY BUTTON ==========
function copyNumber(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert(`✅ Number Copied: ${number}`);
        copyCount++;
        document.getElementById('copy-count').textContent = copyCount;
    });
}
