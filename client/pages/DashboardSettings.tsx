import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  Save,
  RefreshCw,
  Bell,
  Shield,
  Database,
  Mail,
  Palette,
  Globe,
  Key,
  AlertTriangle
} from "lucide-react";

interface AppSettings {
  general: {
    companyName: string;
    timezone: string;
    currency: string;
    language: string;
    dateFormat: string;
  };
  notifications: {
    emailAlerts: boolean;
    slackIntegration: boolean;
    lowStockThreshold: number;
    forecastAccuracyThreshold: number;
    dailyReports: boolean;
    weeklyReports: boolean;
  };
  security: {
    requireMFA: boolean;
    sessionTimeout: number;
    allowedDomains: string[];
    auditLogging: boolean;
  };
  data: {
    dataRetention: number;
    autoBackup: boolean;
    backupFrequency: string;
    exportFormats: string[];
  };
}

const defaultSettings: AppSettings = {
  general: {
    companyName: 'StockPilot Enterprise',
    timezone: 'UTC-8',
    currency: 'USD',
    language: 'en',
    dateFormat: 'MM/DD/YYYY'
  },
  notifications: {
    emailAlerts: true,
    slackIntegration: false,
    lowStockThreshold: 7,
    forecastAccuracyThreshold: 85,
    dailyReports: true,
    weeklyReports: true
  },
  security: {
    requireMFA: true,
    sessionTimeout: 480,
    allowedDomains: ['company.com'],
    auditLogging: true
  },
  data: {
    dataRetention: 365,
    autoBackup: true,
    backupFrequency: 'daily',
    exportFormats: ['CSV', 'Excel', 'PDF']
  }
};

export default function DashboardSettings() {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setSettings(defaultSettings);
    } catch (error) {
      console.error('Failed to load settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setHasChanges(false);
      // Show success message
    } catch (error) {
      console.error('Failed to save settings:', error);
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = (section: keyof AppSettings, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
    setHasChanges(true);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" text="Loading settings..." />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Settings className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground">
                Configure system preferences and security settings
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {hasChanges && (
              <Button onClick={handleSave} disabled={saving}>
                {saving ? (
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                Save Changes
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="data">Data & Backup</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>General Settings</span>
                </CardTitle>
                <CardDescription>
                  Basic application configuration and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={settings.general.companyName}
                      onChange={(e) => updateSetting('general', 'companyName', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select 
                      value={settings.general.timezone} 
                      onValueChange={(value) => updateSetting('general', 'timezone', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                        <SelectItem value="UTC-7">Mountain Time (UTC-7)</SelectItem>
                        <SelectItem value="UTC-6">Central Time (UTC-6)</SelectItem>
                        <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                        <SelectItem value="UTC+0">UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select 
                      value={settings.general.currency} 
                      onValueChange={(value) => updateSetting('general', 'currency', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">US Dollar (USD)</SelectItem>
                        <SelectItem value="EUR">Euro (EUR)</SelectItem>
                        <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                        <SelectItem value="CAD">Canadian Dollar (CAD)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select 
                      value={settings.general.dateFormat} 
                      onValueChange={(value) => updateSetting('general', 'dateFormat', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notification Settings</span>
                </CardTitle>
                <CardDescription>
                  Configure alerts, reports, and notification preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="emailAlerts">Email Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications for critical alerts
                      </p>
                    </div>
                    <Switch
                      id="emailAlerts"
                      checked={settings.notifications.emailAlerts}
                      onCheckedChange={(checked) => updateSetting('notifications', 'emailAlerts', checked)}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="slackIntegration">Slack Integration</Label>
                      <p className="text-sm text-muted-foreground">
                        Send notifications to Slack channels
                      </p>
                    </div>
                    <Switch
                      id="slackIntegration"
                      checked={settings.notifications.slackIntegration}
                      onCheckedChange={(checked) => updateSetting('notifications', 'slackIntegration', checked)}
                    />
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="lowStockThreshold">Low Stock Threshold (days)</Label>
                      <Input
                        id="lowStockThreshold"
                        type="number"
                        value={settings.notifications.lowStockThreshold}
                        onChange={(e) => updateSetting('notifications', 'lowStockThreshold', parseInt(e.target.value))}
                      />
                      <p className="text-xs text-muted-foreground">
                        Alert when stock falls below this many days
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="forecastThreshold">Forecast Accuracy Threshold (%)</Label>
                      <Input
                        id="forecastThreshold"
                        type="number"
                        value={settings.notifications.forecastAccuracyThreshold}
                        onChange={(e) => updateSetting('notifications', 'forecastAccuracyThreshold', parseInt(e.target.value))}
                      />
                      <p className="text-xs text-muted-foreground">
                        Alert when accuracy drops below this percentage
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="dailyReports">Daily Reports</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive daily summary reports via email
                        </p>
                      </div>
                      <Switch
                        id="dailyReports"
                        checked={settings.notifications.dailyReports}
                        onCheckedChange={(checked) => updateSetting('notifications', 'dailyReports', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="weeklyReports">Weekly Reports</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive weekly performance reports via email
                        </p>
                      </div>
                      <Switch
                        id="weeklyReports"
                        checked={settings.notifications.weeklyReports}
                        onCheckedChange={(checked) => updateSetting('notifications', 'weeklyReports', checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Security Settings</span>
                </CardTitle>
                <CardDescription>
                  Manage authentication, access control, and security policies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="requireMFA">Require Multi-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Require MFA for all user accounts
                      </p>
                    </div>
                    <Switch
                      id="requireMFA"
                      checked={settings.security.requireMFA}
                      onCheckedChange={(checked) => updateSetting('security', 'requireMFA', checked)}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={settings.security.sessionTimeout}
                      onChange={(e) => updateSetting('security', 'sessionTimeout', parseInt(e.target.value))}
                    />
                    <p className="text-xs text-muted-foreground">
                      Automatically log out users after this period of inactivity
                    </p>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auditLogging">Audit Logging</Label>
                      <p className="text-sm text-muted-foreground">
                        Log all user actions for security auditing
                      </p>
                    </div>
                    <Switch
                      id="auditLogging"
                      checked={settings.security.auditLogging}
                      onCheckedChange={(checked) => updateSetting('security', 'auditLogging', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>Data & Backup Settings</span>
                </CardTitle>
                <CardDescription>
                  Configure data retention, backup, and export preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="dataRetention">Data Retention (days)</Label>
                    <Input
                      id="dataRetention"
                      type="number"
                      value={settings.data.dataRetention}
                      onChange={(e) => updateSetting('data', 'dataRetention', parseInt(e.target.value))}
                    />
                    <p className="text-xs text-muted-foreground">
                      How long to keep historical data before archiving
                    </p>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="autoBackup">Automatic Backups</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable automated data backups
                      </p>
                    </div>
                    <Switch
                      id="autoBackup"
                      checked={settings.data.autoBackup}
                      onCheckedChange={(checked) => updateSetting('data', 'autoBackup', checked)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="backupFrequency">Backup Frequency</Label>
                    <Select 
                      value={settings.data.backupFrequency} 
                      onValueChange={(value) => updateSetting('data', 'backupFrequency', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Danger Zone</CardTitle>
                <CardDescription>
                  Irreversible and destructive actions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <div>
                      <h4 className="font-medium">Reset All Settings</h4>
                      <p className="text-sm text-muted-foreground">
                        Reset all settings to default values
                      </p>
                    </div>
                  </div>
                  <Button variant="destructive" size="sm">
                    Reset Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
