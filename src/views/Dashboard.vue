<template>
    <div>
        <app-header></app-header>
        <div class="app-body">
            <div class="level-right faq-container">
                <b-button
                    class="has-text-weight-bold faq-button"
                    @click="faqDownload"
                    type="is-primary"
                >
                    FAQs
                </b-button>
            </div>
            <div class="container info-container">
                <div class="is-flex">
                    <b-icon icon="information" type="is-primary"></b-icon>
                    <span
                        >COVID ePass Application is integrated with Aarogya Setu
                        Application. Every individual employee in each pass
                        request is checked for COVID-19 status at the time of
                        pass generation with the Aarogya Setu Application, and
                        upon failing that validation check, the pass request for
                        that employee is rejected. Communication regarding the
                        request rejection is sent to the Organisation Admin and
                        the State Team.</span
                    >
                </div>
            </div>

            <div class="container">
                <b-tabs @change="onTabChange" class="block" size="is-medium">
                    <b-tab-item label="Pass requests">
                        <pass-request-table></pass-request-table>
                    </b-tab-item>
                    <b-tab-item label="Signup requests">
                        <sign-up-request-table></sign-up-request-table>
                    </b-tab-item>
                    <b-tab-item label="Organizations">
                        <organization-tab-item></organization-tab-item>
                    </b-tab-item>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import OrganizationTabItem from '../components/OrganizationTabItem.vue';
import SignUpRequestTable from '../components/SignUpRequestTable.vue';
import PassRequestTable from '../components/PassRequestTable.vue';

export default {
    components: {
        AppHeader,
        OrganizationTabItem,
        SignUpRequestTable,
        PassRequestTable
    },
    methods: {
        onTabChange(index) {
            switch (index) {
                case 0:
                    this.$store.dispatch('fetchAllOrders');
                    break;

                case 1:
                    this.$store.dispatch('fetchSignUpRequests');
                    break;

                case 2:
                    this.$store.dispatch('fetchAllOrganizations');
                    break;
            }
        },
        faqDownload() {
            window.open(process.env.VUE_APP_FAQ_LINK);
        }
    }
};
</script>

<style lang="scss">
.app-body {
    padding: 20px 0 100px;
    border-top: 1px solid #ededed;

    .tabs a {
        border-width: 2px;
    }

    .table td {
        vertical-align: middle;
    }

    .table tr.is-checked {
        background-color: #f7f7f7;
    }
}

.toast {
    font-weight: 600;
}

.jc-space-between {
    justify-content: space-between;
}

.ai-center {
    align-items: center;
}

.jc-space-around {
    justify-content: space-around;
}

.faq-button {
    width: 10%;
}

.faq-container {
    max-width: 86%;
    margin-top: 30px;
    margin-bottom: 30px;
}

.info-container {
    margin-bottom: 30px !important;
    border: 1px solid #00a4ff;
    border-radius: 5px;
}

.info-container > div {
    margin: 10px;
}

.info-container span:nth-child(2) {
    margin-left: 10px;
}
</style>
