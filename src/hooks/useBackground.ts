import { useEffect, useState } from 'react';

const useBackground = (isheader?: boolean) => {
    const sectionIds = ['sobre', 'empresa', 'servicos', 'clientes', 'tecnologias', 'footer'];
    const [backgroundColor, setBackgroundColor] = useState<string>('var(--bg-section-claro)');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = isheader ? window.scrollY + 70 : window.scrollY + 70 + window.innerHeight / 2;
            let foundSection = -1;

            sectionIds.forEach((sectionId, index) => {
                const section = document.getElementById(sectionId);

                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        foundSection = index;
                    }
                }
            });

            if (foundSection !== -1) {
                const cores: Record<number, string> = {
                    0: 'var(--bg-section-claro)',
                    1: 'var(--bg-section-claro)',
                    2: 'var(--bg-section-escuro)',
                    3: 'var(--bg-section-claro)',
                    4: 'var(--bg-section-escuro)',
                    5: 'var(--bg-section-claro)',
                }
                setBackgroundColor(cores[foundSection] ? cores[foundSection] : "var(--bg-header)");
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [sectionIds]);

    return backgroundColor;
};

export default useBackground;