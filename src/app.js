"use strict";
// 2. Mock Data conforming to the Interface
const mockData = [
    {
        id: "90",
        symbol: "BTC",
        name: "Bitcoin",
        nameid: "bitcoin",
        rank: 1,
        price_usd: "64250.35",
        percent_change_24h: "2.45",
        percent_change_1h: "0.12"
    },
    {
        id: "80",
        symbol: "ETH",
        name: "Ethereum",
        nameid: "ethereum",
        rank: 2,
        price_usd: "3450.12",
        percent_change_24h: "-1.15",
        percent_change_1h: "0.05"
    },
    {
        id: "2710",
        symbol: "SOL",
        name: "Solana",
        nameid: "solana",
        rank: 3,
        price_usd: "145.85",
        percent_change_24h: "5.87",
        percent_change_1h: "-0.32"
    },
    {
        id: "48543",
        symbol: "LINK",
        name: "Chainlink",
        nameid: "chainlink",
        rank: 14,
        price_usd: "15.20",
        percent_change_24h: "-3.40",
        percent_change_1h: "-0.15"
    }
];
// 3. Helper function to style percentages color dynamically
function formatPercent(valueStr) {
    const value = parseFloat(valueStr);
    const isPositive = value >= 0;
    const sign = isPositive ? '+' : '';
    const colorClass = isPositive ? 'text-emerald-800 bg-emerald-900/10' : 'text-rose-900 bg-rose-900/10';
    return `<span class="px-2 py-1.5 rounded text-xs font-semibold ${colorClass}">${sign}${value}%</span>`;
}
// 4. Render Grid function
function renderGrid(assets) {
    const gridContainer = document.getElementById('crypto-grid');
    if (!gridContainer)
        return;
    // Clear loading skeletons
    gridContainer.innerHTML = '';
    assets.forEach(asset => {
        // Create card element
        const card = document.createElement('div');
        // Tailwind styling for sleek cards with transitions and subtle borders
        card.className = `bg-[#E6E49F] border border-slate-800 hover:border-slate-700 
                          rounded-1xl p-6 transition-all duration-300 hover:-translate-y-1 
                          hover:shadow-lg hover:shadow-cyan-500/5 flex flex-col justify-between`;
        // Format raw USD string into a cleaner Currency display
        const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(parseFloat(asset.price_usd));
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-xs font-mono font-bold bg-slate-700/70 text-slate-100 px-2 py-1 rounded">
                        RANK #${asset.rank}
                    </span>
                    <div class="flex flex-col gap-1 items-end">
                        <span class="gap-1 text-xs text-slate-500 font-mono"><a href="https://api.coinlore.net/api/ticker/?id=${asset.id}">API ID: ${asset.id}</a></span>
                    </div>
                </div>

                <div class="flex items-baseline space-x-2 mb-4">
                    <h2 class="text-xl font-bold tracking-tight text-slate-600">${asset.name}</h2>
                    <span class="text-sm font-semibold text-cyan-500 uppercase tracking-wider">${asset.symbol}</span>
                </div>
                
                <p class="text-xs text-slate-800 font-mono -mt-3 mb-4">tag: ${asset.nameid}</p>

                <div class="text-2xl font-bold text-slate-600 mb-6">
                    ${formattedPrice}
                </div>
            </div>

            <div class="border-t border-slate-800/80 pt-4 flex justify-between items-center">
                <div class="flex flex-col gap-1">
                    <span class="text-[10px] uppercase font-bold tracking-wider text-slate-900">1h Change</span>
                    ${formatPercent(asset.percent_change_1h)}
                </div>
                <div class="flex flex-col gap-1 items-end">
                    <span class="text-[10px] uppercase font-bold tracking-wider text-slate-800">24h Change</span>
                    ${formatPercent(asset.percent_change_24h)}
                </div>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}
// Initialize application on DOM load
document.addEventListener('DOMContentLoaded', () => {
    renderGrid(mockData);
});
