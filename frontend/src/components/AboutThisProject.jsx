import React from 'react';

const AboutThisProject = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mt-8 animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-slate-800 mb-4">About This Project</h2>
            <p className="text-slate-600 mb-6">
                This is a comprehensive regional database of germline variants from Paraná. This resource provides information to researchers and health professionals for variant interpretation. 
                <br /><br />
                aPRoVAR is based on whole-exome sequencing data of 1,010 individuals from Paraná, Brazil. Allele frequency estimates are adjusted by phenotype group. Variants with allele frequency equal to 0 correspond to those which all alternative genotypes occurred in individuals affected by one of the cohort phenotypes (COVID-19, breast cancer and sepsis). 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">How to Use</h3>
                    <p className="text-slate-600 mb-3">
                        Use the search bar above to query our database:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                        <li><strong>By Gene:</strong> Enter a gene symbol (e.g., <i>TP53</i>)</li>
                        <li><strong>By Variant:</strong> Enter a specific variant (e.g., 17:7670699-C-A or rsID)</li>
                        <li><strong>By Region:</strong> Enter a genomic region (e.g., 17:7670000-7671000)</li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Basic Features</h3>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                        <li>Search across multiple variant types and genomic regions.</li>
                        <li>View detailed genetic variant annotations.</li>
                        <li>Filter results by functional consequence, variant type, pathogenicity annotation and genotype missingness rate.</li>
                        <li>Request filtered variant data for offline analysis.</li>
                    </ul>
                </div>
            </div>

            <hr className="my-6 border-slate-200" />
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact</h3>

            For bug reports, feature requests, please contact:

                    <div className="text-slate-600 mb-6">
                        <div className="text-slate-600 space-y-2 text-sm leading-relaxed">
                            <div>
                                <p className="text-base font-semibold text-slate-800">
                                    Fabio Passetti, Ph.D.
                                </p>
                                <p className="text-slate-700 font-medium">
                                    Laboratory of Bioinformatics and Clinical Genomics
                                </p>
                                <p>
                                    Carlos Chagas Institute — Fundação Oswaldo Cruz (Fiocruz)
                                </p>
                            </div>

                            <address className="not-italic text-slate-500 text-xs leading-normal pt-1">
                                Rua Professor Algacyr Munhoz Mader, 3775<br />
                                Curitiba - PR, Brazil<br />
                                CEP 81310-020
                            </address>

                            <div className="pt-2">
                                <a 
                                    href="mailto:fabio.passetti@fiocruz.br" 
                                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                                >
                                    fabio.passetti@fiocruz.br
                                </a>
                            </div>
                        </div>
                    </div>

            <hr className="my-6 border-slate-200" />
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Citation</h3>
            <p className="text-slate-600 italic mb-6">
            <span className="not-italic">
                By using this resource, you agree to cite our paper:
            </span>
            <br />
            <span className="font-semibold not-italic">
                "aPRoVAR database: a public online resource of 1,010 exomes from an admixed population in Paraná, Brazil"
            </span>
            <span className="not-italic">
                {" "}by Campanário & Janke
            </span>{" "}
            <i>et al.</i>
            <span className="not-italic">
                , 2026 (Citation Details Soon).
            </span>
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
