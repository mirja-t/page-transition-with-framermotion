import europe from '../assets/images/europe.jpg';
import asia from '../assets/images/asia.jpg';
import africa from '../assets/images/africa.jpg';
import northamerica from '../assets/images/north-america.jpg';
import southamerica from '../assets/images/south-america.jpg';
import australia from '../assets/images/australia.jpg';
import antarctica from '../assets/images/antarctica.jpg';

export const menu: {
    items: {[key: string]: {
        id: string;
        label: string;
        path: string;
        image: string;
    }}
    menuitems: {
        key: string;
        id: string;
        image: any;
        label: string;
        path: string;
}[]
    chapterlength: number,
    getItem: (item: string) => {
        label: string;
        path: string;
        id: string;
        image: any;
    }
    getChapterNumber: (item: string) => number
    getItemByChapternumber: (chapternumber: number) => {
        label: string;
        path: string;
        id: string;
        image: any;
    }
} = {
    items: {
        chapter1: {
            id: 'europe',
            label: 'Europe',
            path: '/chapter-1',
            image: europe
        },
        chapter2: {
            id: 'asia',
            label: 'Asia',
            path: '/chapter-2',
            image: asia
        },
        chapter3: {
            id: 'africa',
            label: 'Africa',
            path: '/chapter-3',
            image: africa
        },
        chapter4: {
            id: 'northamerica',
            label: 'North America',
            path: '/chapter-4',
            image: northamerica
        },
        chapter5: {
            id: 'southamerica',
            label: 'South America',
            path: '/chapter-5',
            image: southamerica
        },
        chapter6: {
            id: 'australia',
            label: 'Australia',
            path: '/chapter-6',
            image: australia
        },
        chapter7: {
            id: 'antarctica',
            label: 'Antarctica',
            path: '/chapter-7',
            image: antarctica
        }
    },
    get menuitems() {
        return Object.entries(this.items).map(entry => {
            return {
                key: entry[0],
                id: entry[1].id,
                label: entry[1].label,
                path: entry[1].path,
                image: entry[1].image
            }
        })
    },
    get chapterlength() {
        return Object.keys(this.items).length;
    },

    getItem(item) {
        return this.items[item]
    },
    getItemByChapternumber(chapternumber) {
        return this.menuitems[chapternumber - 1]
    },
    getChapterNumber(item) {
        return Object.keys(this.items).indexOf(item) + 1;
    }
}


