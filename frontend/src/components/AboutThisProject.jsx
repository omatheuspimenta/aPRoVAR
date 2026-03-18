import React from 'react';

const AboutThisProject = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mt-8 animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-slate-800 mb-4">About This Project</h2>
            <p className="text-slate-600 mb-6">
                This is a variant search project designed to provide a comprehensive database of genomic variants, 
                aiding researchers and clinicians in the discovery and interpretation of human genetic variation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">How to Use</h3>
                    <p className="text-slate-600 mb-3">
                        Use the search bar above to query our database:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                        <li><strong>By Gene:</strong> Enter a gene symbol (e.g., TP53)</li>
                        <li><strong>By Variant:</strong> Enter a specific variant (e.g., 17:7670699-C-A or rsID)</li>
                        <li><strong>By Region:</strong> Enter a genomic region (e.g., 17:7670000-7671000)</li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Basic Features</h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                        <li>Search across multiple variant types and genomic regions.</li>
                        <li>View detailed variant statistics, including allele frequencies and population distributions.</li>
                        <li>Filter results by consequence, variant type, and clinical significance.</li>
                        <li>Request filtered variant data for offline analysis.</li>
                    </ul>
                </div>
            </div>

            <hr className="my-6 border-slate-200" />
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Citation</h3>
            <p className="text-slate-600 italic mb-6">
                If you use this resource in your research, please cite our article:
                <br />
                <span className="font-semibold not-italic">"aPRoVAR: Arquivo Paranaense Online de Variantes Genéticas"</span> (Citation Details Soon).
            </p>

            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
                <p>
                    <strong>Disclaimer:</strong> The data provided in this project is for academic and research purposes only and may not be used for commercial purposes.
                </p>
            </div>
        </div>
    );
};

export default AboutThisProject;
