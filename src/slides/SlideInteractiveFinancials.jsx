import React, { useState, useMemo } from 'react';
import { RefreshCw, TrendingDown, DollarSign, Users, Server, Briefcase, Plus, Trash2, Save } from 'lucide-react';
import initialData from './financials.json';

const SlideInteractiveFinancials = () => {
    // --- State: Assumptions (Loaded from financials.json) ---
    const [totalRaise, setTotalRaise] = useState(initialData.totalRaise);

    // New Granular Team State
    const [team, setTeam] = useState(initialData.team);

    // Ops Breakdown
    const [legalAdminSpend, setLegalAdminSpend] = useState(initialData.legalAdminSpend); // Legal, Accounting, Admin
    const [softwarePerHead, setSoftwarePerHead] = useState(initialData.softwarePerHead); // Tools per person
    const [securityCompliance, setSecurityCompliance] = useState(initialData.securityCompliance); // Vanta, Audits
    const [travelSalesSpend, setTravelSalesSpend] = useState(initialData.travelSalesSpend); // Travel, Conferences
    const [marketingSpend, setMarketingSpend] = useState(initialData.marketingSpend); // Ads, PR, Misc GTM
    const [equipmentCost, setEquipmentCost] = useState(initialData.equipmentCost); // One-time per hire
    const [burdenRate, setBurdenRate] = useState(initialData.burdenRate); // Benefits/Tax % 



    // Infra
    const [infraBase, setInfraBase] = useState(initialData.infraBase);
    const [infraGrowth, setInfraGrowth] = useState(initialData.infraGrowth); // linear growth per month

    // Helper to update team members
    const updateMember = (id, field, value) => {
        setTeam(team.map(m => m.id === id ? { ...m, [field]: value } : m));
    };

    const addMember = () => {
        const newId = Math.max(...team.map(t => t.id), 0) + 1;
        setTeam([...team, { id: newId, role: 'New Hire', salary: 10833, startMonth: 6 }]);
    };

    const removeMember = (id) => {
        setTeam(team.filter(m => m.id !== id));
    };

    const saveConfiguration = async () => {
        const config = {
            totalRaise,
            team,
            legalAdminSpend,
            softwarePerHead,
            securityCompliance,
            travelSalesSpend,
            marketingSpend,
            equipmentCost,
            burdenRate,
            infraBase,
            infraGrowth
        };

        try {
            const response = await fetch('/api/save-financials', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });

            if (response.ok) {
                alert("Configuration saved to project! (src/slides/financials.json)");
            } else {
                alert("Failed to save configuration.");
            }
        } catch (error) {
            console.error("Save error:", error);
            alert("Error saving configuration.");
        }
    };

    // --- Calculations ---
    const { monthlyData, totals } = useMemo(() => {
        let currentCash = totalRaise;
        const data = [];

        let totalTeam = 0;
        let totalGtm = 0;
        let totalAdminInfra = 0;

        for (let month = 1; month <= 12; month++) {
            // Team Cost Calculation
            let monthlyTeamCost = 0;
            let activeHeadcount = 0;
            let newHiresThisMonth = 0;

            team.forEach(member => {
                if (month >= member.startMonth) {
                    monthlyTeamCost += member.salary;
                    activeHeadcount++;
                }
                if (month === member.startMonth) {
                    newHiresThisMonth++;
                }
            });
            const teamCostLoaded = monthlyTeamCost * (1 + (burdenRate / 100)); // Dynamic Burden Rate

            // Variable Costs
            const softwareCost = activeHeadcount * softwarePerHead;
            const infraCost = infraBase + (infraGrowth * (month - 1));

            // One-time Costs (Equipment)
            const oneTimeEquipment = newHiresThisMonth * equipmentCost;

            // Fixed/Semifixed Costs
            const opsCost = legalAdminSpend + travelSalesSpend + marketingSpend + securityCompliance;

            // Total Burn
            const monthlyBurn = teamCostLoaded + softwareCost + infraCost + opsCost + oneTimeEquipment;

            // Update Cash
            currentCash -= monthlyBurn;

            // Accumulate Categories
            totalTeam += teamCostLoaded;
            totalGtm += (marketingSpend + travelSalesSpend);
            totalAdminInfra += (legalAdminSpend + securityCompliance + softwareCost + infraCost + oneTimeEquipment);

            data.push({
                month,
                burn: monthlyBurn,
                cash: currentCash,
                isPositive: currentCash > 0
            });
        }
        return { monthlyData: data, totals: { team: totalTeam, gtm: totalGtm, admin: totalAdminInfra } };
    }, [totalRaise, team, legalAdminSpend, softwarePerHead, infraBase, infraGrowth, securityCompliance, travelSalesSpend, marketingSpend, equipmentCost, burdenRate]);

    const data = monthlyData;

    const finalCash = data[11].cash;
    const avgBurn = data.reduce((acc, curr) => acc + curr.burn, 0) / 12;
    const runwayMonths = data.filter(d => d.cash > 0).length;

    // --- Formatters ---
    const fmtCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    const fmtK = (val) => {
        if (val >= 100000) return `$${(val / 1000).toFixed(0)} k`;
        return `$${val} `;
    };
    const fmtM = (val) => {
        if (val >= 1000000) return `$${(val / 1000000).toFixed(1)} M`;
        return `$${(val / 1000).toFixed(1)} k`;
    };

    return (
        <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
            <div className="text-center mb-6">
                <h2 className="headline" style={{ fontSize: '28px', marginBottom: '8px' }}>
                    <span className="highlight">$1M Pre-Seed</span> Financial Model
                </h2>
                <p className="body-text" style={{ fontSize: '14px', margin: 0 }}>
                    Adjust assumptions to stress-test our plan. All values are monthly.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 400px) 1fr', gap: '32px', flex: 1, minHeight: 0 }}>
                {/* --- Left: Controls --- */}
                <div style={{
                    background: '#f8fafc',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    maxHeight: '100%'
                }}>
                    {/* Section 1: Total Raise */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">Total Raise</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="range"
                                min="500000"
                                max="2000000"
                                step="50000"
                                value={totalRaise}
                                onChange={(e) => setTotalRaise(Number(e.target.value))}
                                className="w-full"
                                style={{ accentColor: 'var(--color-primary)' }}
                            />
                            <span className="text-sm font-bold text-primary w-20 text-right">{fmtM(totalRaise)}</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-200"></div>

                    {/* Section 2: Team Controls */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-primary" />
                                <span className="font-semibold text-sm">Team Roster</span>
                                <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-mono font-bold">
                                    {fmtK(totals.team)}
                                </span>
                            </div>
                            <button onClick={addMember} className="p-1 px-2 text-xs bg-gray-200 hover:bg-gray-300 rounded flex items-center gap-1">
                                <Plus size={12} /> Add
                            </button>
                        </div>

                        {/* Team List - No nested scroll, just flows naturally */}
                        <div className="space-y-4">
                            {team.map((member) => (
                                <div key={member.id} className="bg-white p-3 rounded border border-gray-200 shadow-sm relative group">
                                    <div className="flex justify-between items-center mb-2">
                                        <input
                                            value={member.role}
                                            onChange={(e) => updateMember(member.id, 'role', e.target.value)}
                                            className="text-xs font-bold text-gray-800 bg-transparent focus:bg-gray-50 border-none p-0 w-32 outline-none"
                                        />
                                        <button onClick={() => removeMember(member.id)} className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Trash2 size={12} />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Salary Control */}
                                        <div>
                                            <label className="text-[10px] text-gray-500 block">Salary / Mo</label>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="range" min="2000" max="25000" step="500"
                                                    value={member.salary}
                                                    onChange={(e) => updateMember(member.id, 'salary', Number(e.target.value))}
                                                    className="w-full h-1"
                                                />
                                                <span className="text-[10px] font-mono w-10 text-right">{fmtK(member.salary)}</span>
                                            </div>
                                        </div>

                                        {/* Start Month Control */}
                                        <div>
                                            <label className="text-[10px] text-gray-500 block">Start Month</label>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="range" min="1" max="12" step="1"
                                                    value={member.startMonth}
                                                    onChange={(e) => updateMember(member.id, 'startMonth', Number(e.target.value))}
                                                    className="w-full h-1"
                                                />
                                                <span className="text-[10px] font-bold w-4 text-right">{member.startMonth}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="grid grid-cols-2 gap-4 mt-2">
                                {/* Equipment One-Time */}
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-slate-600">Equipment (One-Time)</span>
                                        <span className="font-mono text-slate-800">${equipmentCost}</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="5000" step="500"
                                        value={equipmentCost}
                                        onChange={(e) => setEquipmentCost(Number(e.target.value))}
                                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                    />
                                </div>



                                {/* Burden Rate Control */}
                                <div className="bg-gray-50 p-3 rounded border border-dashed border-gray-300">
                                    <div className="flex items-center justify-between mb-1">
                                        <label className="text-[10px] font-semibold text-gray-600">Tax/Benefits</label>
                                        <span className="text-[10px] font-mono font-bold">{burdenRate}%</span>
                                    </div>
                                    <input
                                        type="range" min="10" max="40" step="1"
                                        value={burdenRate}
                                        onChange={(e) => setBurdenRate(Number(e.target.value))}
                                        className="w-full h-1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200"></div>

                    {/* Section 3: Go-To-Market (GTM) */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <TrendingDown size={16} className="text-primary" />
                            <span className="font-semibold text-sm">Go-To-Market (GTM)</span>
                            <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-mono font-bold">
                                {fmtK(totals.gtm)}
                            </span>
                        </div>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">Marketing / Mo</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="0" max="10000" step="500" value={marketingSpend} onChange={(e) => setMarketingSpend(Number(e.target.value))} className="w-full" style={{ accentColor: 'var(--color-primary)' }} />
                                        <span className="text-xs font-mono w-12 text-right">{fmtK(marketingSpend)}</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">Travel & Sales / Mo</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="0" max="15000" step="500" value={travelSalesSpend} onChange={(e) => setTravelSalesSpend(Number(e.target.value))} className="w-full" style={{ accentColor: 'var(--color-primary)' }} />
                                        <span className="text-xs font-mono w-12 text-right">{fmtK(travelSalesSpend)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200"></div>

                    {/* Section 4: Operations & Infra */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Server size={16} className="text-primary" />
                            <span className="font-semibold text-sm">General Admin & Infra</span>
                            <span className="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-full font-mono font-bold">
                                {fmtK(totals.admin)}
                            </span>
                        </div>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">Legal/Admin / Mo</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="1000" max="10000" step="500" value={legalAdminSpend} onChange={(e) => setLegalAdminSpend(Number(e.target.value))} className="w-full" style={{ accentColor: 'var(--color-primary)' }} />
                                        <span className="text-xs font-mono w-12 text-right">{fmtK(legalAdminSpend)}</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">Security/Audit / Mo</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="0" max="5000" step="250" value={securityCompliance} onChange={(e) => setSecurityCompliance(Number(e.target.value))} className="w-full" style={{ accentColor: 'var(--color-primary)' }} />
                                        <span className="text-xs font-mono w-12 text-right">{fmtK(securityCompliance)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-gray-500 block mb-1">SaaS / Head / Mo</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="50" max="500" step="10" value={softwarePerHead} onChange={(e) => setSoftwarePerHead(Number(e.target.value))} className="w-full" style={{ accentColor: 'var(--color-primary)' }} />
                                        <span className="text-xs font-mono w-12 text-right">{softwarePerHead}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 p-3 rounded-lg">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-gray-500 block mb-1">Infra Start / Mo</label>
                                        <div className="flex items-center gap-2">
                                            <input type="range" min="500" max="5000" step="100" value={infraBase} onChange={(e) => setInfraBase(Number(e.target.value))} className="w-full" style={{ accentColor: 'var(--color-primary)' }} />
                                            <span className="text-xs font-mono w-12 text-right">{fmtK(infraBase)}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-500 block mb-1">Infra Growth / Mo</label>
                                        <div className="flex items-center gap-2">
                                            <input type="range" min="0" max="2000" step="100" value={infraGrowth} onChange={(e) => setInfraGrowth(Number(e.target.value))} className="w-full" style={{ accentColor: 'var(--color-primary)' }} />
                                            <span className="text-xs font-mono w-12 text-right">{fmtK(infraGrowth)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="h-8"></div> {/* Spacer for bottom scroll */}
                        </div>
                    </div>
                </div>

                {/* --- Right: Visualization --- */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* KPIs */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                        <div style={{ background: runwayMonths >= 12 ? '#ecfdf5' : '#fef2f2', border: `1px solid ${runwayMonths >= 12 ? '#10b981' : '#ef4444'} `, borderRadius: '8px', padding: '16px' }}>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Runway</div>
                            <div className="text-2xl font-bold" style={{ color: runwayMonths >= 12 ? '#047857' : '#b91c1c' }}>{runwayMonths} Months</div>
                            <div className="text-xs mt-1 opacity-75">{runwayMonths >= 12 ? 'Target Achieved' : 'Need more capital'}</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Avg. Burn</div>
                            <div className="text-2xl font-bold text-gray-800">{fmtM(avgBurn)}</div>
                            <div className="text-xs mt-1 text-gray-400">per month</div>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">End Cash</div>
                            <div className="text-2xl font-bold" style={{ color: finalCash > 0 ? '#059669' : '#dc2626' }}>{fmtM(finalCash)}</div>
                            <div className="text-xs mt-1 text-gray-400">At Month 12</div>
                        </div>
                    </div>

                    {/* Chart Area */}
                    <div style={{ flex: 1, background: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px' }}>
                        {data.map((d, i) => {
                            const maxCash = totalRaise;
                            const heightPct = Math.max(0, (d.cash / maxCash) * 100);
                            const burnHeightPct = Math.max(4, (d.burn / maxCash) * 100 * 5); // Exaggerate burn for visibility

                            return (
                                <div key={i} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' }}>
                                    {/* Cash Bar */}
                                    <div style={{
                                        width: '100%',
                                        height: `${heightPct}% `,
                                        background: d.cash > 0 ? 'var(--color-primary)' : '#fee2e2',
                                        opacity: 0.2,
                                        borderRadius: '4px 4px 0 0',
                                        transition: 'all 0.3s ease'
                                    }}></div>

                                    {/* Burn Bar (Overlay) */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '60%',
                                        height: `${burnHeightPct}% `,
                                        background: '#f43f5e',
                                        borderRadius: '4px 4px 0 0',
                                        transition: 'all 0.3s ease'
                                    }}></div>

                                    <div style={{ marginTop: '8px', fontSize: '10px', color: '#64748b', fontWeight: '500' }}>M{d.month}</div>

                                    {/* Tooltip on hover could go here, but keeping simple */}
                                    {(i === 11 || i === 5) && (
                                        <div style={{ position: 'absolute', top: `${100 - heightPct - 15}% `, fontSize: '10px', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                                            {fmtM(d.cash)}
                                        </div>
                                    )}
                                </div>
                            )
                        })}

                        {/* Legend */}
                        <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '16px' }}>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-primary opacity-20 rounded-sm"></div>
                                <span className="text-xs text-gray-500">Cash Balance</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-rose-500 rounded-sm"></div>
                                <span className="text-xs text-gray-500">Monthly Burn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --- Save Configuration Button --- */}
            <div className="mt-12 pt-8 border-t border-gray-100">
                <button
                    onClick={saveConfiguration}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded text-xs font-mono transition-colors"
                >
                    <Save className="w-3 h-3" />
                    Save Current Configuration
                </button>
            </div>
        </div>
    );
};

export default SlideInteractiveFinancials;
