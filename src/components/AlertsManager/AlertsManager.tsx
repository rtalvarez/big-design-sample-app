import { AlertsManager as BcAlertsManager, createAlertsManager } from '@bigcommerce/big-design';
import React from 'react';

export const alertsManager = createAlertsManager();

export const AlertsManager: React.FC = () => <BcAlertsManager manager={alertsManager} />;
